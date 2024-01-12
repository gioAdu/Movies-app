<script>
	import InfiniteScroll from '$lib/components/misc/InfiniteScroll.svelte';
	import PersonCard from '$lib/components/cards/PersonCard.svelte';
	export let data;

	let params = { showType: 'person', showcase: 'popular' };
	let pageNumber = 1;
	let peopleListData = [];
	let newBatch = null;

	$: {
		pageNumber = data.peopleList.page;
		peopleListData = data.peopleList.results;
		newBatch = data.peopleList.results;
	}

	const getData = async () => {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ pageNumber, params })
		};

		const response = await fetch(`/api/pagination`, options);
		const resp = await response.json();

		newBatch = resp.newData.results;

		peopleListData = [...peopleListData, ...newBatch];
	};
</script>

<div class="flex flex-wrap mt-6">
	{#each peopleListData as item}
		<div class="p-2 w-full sm:w-1/2 md:w-1/3 xl:w-1/4">
			<PersonCard person={item} baseSrc='https://image.tmdb.org/t/p/w470_and_h470_face'/>
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
