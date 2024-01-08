<script>
	import RatingWheel from '$lib/components/RatingWheel.svelte';
	import { formatRuntime } from '$lib/helpers/runtimeFormatter';
	import { formatNumber } from '$lib/helpers/numberFormatter';
	export let data;

	const movieData = data.movieDetails;
	console.log(movieData);
	const formattedYear = new Date(movieData.release_date).getFullYear();

	const formattedDate = new Date(movieData.release_date).toLocaleDateString('en-US', {
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
			<div class="card sm:card-side items-center shadow-xl text-white py-8">
				<div class="relative">
					<div class="absolute -right-5 -top-5">
						<RatingWheel movie={movieData} wheelSize="4" />
					</div>
					<figure>
						<img
							src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}`}
							alt="poster"
							class="rounded"
						/>
					</figure>
				</div>
				<div class="card-body">
					<h1 class="card-title text-4xl font-bold">
						{movieData.title} <span class="text-gray-300 font-normal">({formattedYear})</span>
					</h1>
					<div class="py-4">
						<span>{formattedDate} •</span>
						{genres}
						{formatRuntime(movieData.runtime)}
					</div>

					<h2 class="text-xl italic text-gray-300">{movieData.tagline}</h2>
					<h2 class="text-xl font-bold">Overview</h2>
					<div>{movieData.overview}</div>

					<div class=" gap-5">
						<div class="flex gap-2 items-center">
							<h3 class="text-xl">Budget :</h3>
							<div>{formatNumber(movieData.budget)} $</div>
						</div>

						<div class="flex gap-2 items-center">
							<h3 class="text-xl">Revenue :</h3>
							<div>{formatNumber(movieData.revenue)} $</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
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
