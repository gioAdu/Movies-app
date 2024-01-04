<script>
	import Carousel from '../lib/components/Carousel.svelte';

	export let data;

	const moviesData = data.moviesData.results;
	const TVData = data.TVData.results;
	console.log(TVData);
</script>

<div class="flex px-4 pt-10 flex-col gap-3 pb-4 border border-accent rounded-md mt-4 mx-2">
	<h1 class="text-4xl">Welcome</h1>
	<h2 class="text-2xl">Discover movies, TV Shows and much more</h2>

	<input
		type="text"
		placeholder="Search for movies"
		class="input input-bordered w-full input-accent focus:outline-none"
	/>
</div>

<div class="p-2">
	<div class="flex items-center gap-4 py-5">
		<h2 class="text-3xl">Trending Movies |</h2>
		<label class="flex cursor-pointer gap-2 items-end">
			<span class="label-text text-xl">Today</span>
			<input type="checkbox" class="toggle toggle-accent" />
			<span class="label-text text-xl">This week</span>
		</label>
	</div>

	<Carousel data={moviesData} />
</div>

<div class="p-2">
	<div class="flex items-center gap-4 py-5">
		<h2 class="text-3xl">Trending TV Shows |</h2>
		<label class="flex cursor-pointer gap-2 items-end">
			<span class="label-text text-xl">Today</span>
			<input type="checkbox" class="toggle toggle-accent" />
			<span class="label-text text-xl">This week</span>
		</label>
	</div>

	<Carousel data={TVData} />
</div>
