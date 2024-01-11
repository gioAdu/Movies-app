<script>
	import InfiniteScroll from '$lib/components/common/InfiniteScroll.svelte';
	import MovieCard from '$lib/components/common/MovieCard.svelte';
	export let data;

	let params;
	let pageNumber = 1;
	let showcaseData = [];
	let newBatch = null;

	$: {
		params = data.params;
		pageNumber = data.showcase.page;
		showcaseData = data.showcase.results;
		newBatch = data.showcase.results;
	}

	const getData = async () => {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ pageNumber, params })
		};

		const response = await fetch(`/api`, options);
		const resp = await response.json();

		newBatch = resp.newData.results;

		showcaseData = [...showcaseData, ...newBatch];
	};
</script>

<div class="flex flex-wrap">
	{#each showcaseData as item}
		<div class="p-2 w-full sm:w-1/2 md:w-1/3 xl:w-1/4">
			<MovieCard movie={item} />
		</div>
	{/each}
	<InfiniteScroll
		hasMore={Boolean(newBatch && newBatch.length)}
		threshold={1}
		on:loadMore={() => {
			pageNumber++;
			getData();
		}}
	/>
</div>
