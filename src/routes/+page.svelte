<script>
	import MovieCarousel from '$lib/components/carousels/MovieCarousel.svelte';
	import SearchInput from '$lib/components/input_controllers/SearchInput.svelte';
	import { title, description } from '$lib/stores/store';
	export let data;

	let moviesData = data.moviesData.results;
	let TVData = data.TVData.results;

	$title = 'Welcome, discover Movies, Tv Shows and more';
	$description =
		'Explore a wide variety of movies and TV shows with MovieCarousel. Discover new favorites, watch trailers, and more.';

	const hanldeClick = async (e, type) => {
		const time = e.target.checked ? 'week' : 'day';

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ time, type })
		};

		const res = await fetch('/api/trending', options);
		const responseData = await res.json();

		if (type === 'movie') {
			return (moviesData = responseData.moviesData.results);
		} else {
			return (TVData = responseData.moviesData.results);
		}
	};
</script>

<div class="flex px-4 pt-10 flex-col gap-3 pb-4 border border-accent rounded-md mt-4 mx-2">
	<h1 class="text-4xl">Welcome</h1>
	<h2 class="text-2xl">Discover movies, TV Shows and much more</h2>

	<SearchInput />
</div>

<div class="p-2">
	<div class="flex flex-wrap items-center justify-center md:justify-normal gap-4 py-5">
		<h2 class="text-3xl">Trending Movies |</h2>
		<label class="flex cursor-pointer gap-2 items-end">
			<span class="label-text text-xl">Today</span>
			<input
				type="checkbox"
				class="toggle toggle-accent"
				on:click={(e) => hanldeClick(e, 'movie')}
			/>
			<span class="label-text text-xl">This week</span>
		</label>
	</div>

	{#key moviesData}
		<MovieCarousel data={moviesData} />
	{/key}
</div>

<div class="p-2">
	<div class="flex flex-wrap items-center justify-center md:justify-normal gap-4 py-5">
		<h2 class="text-3xl">Trending TV Shows |</h2>
		<label class="flex cursor-pointer gap-2 items-end">
			<span class="label-text text-xl">Today</span>
			<input type="checkbox" class="toggle toggle-accent" on:click={(e) => hanldeClick(e, 'tv')} />
			<span class="label-text text-xl">This week</span>
		</label>
	</div>

	{#key TVData}
		<MovieCarousel data={TVData} />
	{/key}
</div>
