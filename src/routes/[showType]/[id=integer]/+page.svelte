<script>
	import RatingWheel from '$lib/components/RatingWheel.svelte';
	import { formatRuntime } from '$lib/helpers/runtimeFormatter';
	import { formatNumber } from '$lib/helpers/numberFormatter';
	import CastCarousel from '$lib/components/CastCarousel.svelte';
	export let data;

	const movieData = data.movieDetails;
	const cast = data.cast.cast;
	const formattedYear = new Date(movieData.release_date || movieData.first_air_date).getFullYear();

	const formattedDate = new Date(
		movieData.release_date || movieData.first_air_date
	).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric'
	});

	const genres = movieData.genres
		.map((genre, i) => `${genre.name}${i < movieData.genres.length - 1 ? ', ' : ' • '}`)
		.join('');
</script>

<div
	class="full-width-div"
	style="background-image: url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces{movieData.backdrop_path})"
>
	<div class="overlay">
		<div class="container mx-auto">
			<div class="card md:card-side items-center shadow-md text-white py-8 w-full">
				<div class="relative">
					<div class="absolute -right-5 -top-5">
						<RatingWheel movie={movieData} wheelSize="4" />
					</div>
					<img
						src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movieData.poster_path}`}
						alt="poster"
						class="rounded min-w-56"
					/>
				</div>
				<div class="card-body">
					<h1 class="card-title text-4xl font-bold">
						{movieData.title || movieData.name}
						<span class="text-gray-300 font-normal">({formattedYear})</span>
					</h1>
					<div class="py-4">
						<span>{formattedDate} •</span>
						{genres}
						{formatRuntime(movieData.runtime || movieData.episode_run_time[0])}
					</div>

					<h2 class="text-xl italic text-gray-300">{movieData.tagline}</h2>
					<h2 class="text-xl font-bold">Overview</h2>
					<div>{movieData.overview}</div>

					<div class=" gap-5">
						{#if movieData.budget}
							<div class="flex gap-2 items-center">
								<h3 class="text-xl">Budget :</h3>
								<div>{formatNumber(movieData.budget)} $</div>
							</div>
						{/if}

						{#if movieData.revenue}
							<div class="flex gap-2 items-center py-2">
								<h3 class="text-xl">Revenue :</h3>
								<div>{formatNumber(movieData.revenue)} $</div>
							</div>
						{/if}

						<div class="flex gap-2 items-center">
							<h3 class="text-xl">Status :</h3>
							<div>{movieData.status}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="mt-5">
	<h2 class="text-4xl font-bold">Top cast</h2>
	<CastCarousel data={cast.slice(0, 10)} />
</div>

<style>
	.full-width-div {
		width: 100dvw; /* make it 100% of the viewport width (vw) */
		position: relative;
		left: calc(
			(100% - 100vw) / 2
		); /* then remove the gap to the left of the container with this equation */
	}

	.overlay {
		background-image: linear-gradient(
			to right,
			rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px),
			rgba(31.5, 31.5, 31.5, 0.84) 50%,
			rgba(31.5, 31.5, 31.5, 0.84) 100%
		);
	}
</style>
