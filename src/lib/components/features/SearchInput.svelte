<script>
	import debounceTimer from '$lib/helpers/filterLogic';
	import HorizontalCard from '../common/HorizontalCard.svelte';
	let filetedList = [];

	const fetchData = async (e) => {
		const response = await debounceTimer(e.target.value);

		filetedList = [...response.filteredData.results];
	};
</script>

<div class="dropdown dropdown-open">
	<input
		type="text"
		placeholder="Search for movies, Tv Shows, People"
		class="input input-bordered w-full input-accent focus:outline-none"
		on:keyup={fetchData}
	/>
	{#if filetedList.length > 0}
		<ul
			tabindex="-1"
			class="flex-nowrap dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full shrink overflow-y-auto max-h-96"
		>
			{#each filetedList as item}
				<li class="w-full">
					<a class="flex w-full" href="/{item.media_type}/{item.id}"
						><HorizontalCard movie={item} /></a
					>
				</li>
			{/each}
		</ul>
	{/if}
</div>
