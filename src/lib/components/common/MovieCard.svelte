<script>
	import RatingWheel from '../features/RatingWheel.svelte';
	import { checkMovieImage } from '$lib/helpers/checkMovieImage.js';
	export let showWheel = true;
	export let movie;
	
	$:imagePath = checkMovieImage(movie.poster_path, 'https://image.tmdb.org/t/p/w220_and_h330_face');
</script>

<div class="card bg-base-100 shadow-md h-full">
	<div class="flex justify-center relative">
		<div class="relative">
			{#if showWheel}
				<div class="-left-2 absolute -bottom-5">
					<RatingWheel {movie} />
				</div>
			{/if}
			<img class="rounded-md h-80 object-cover" src={imagePath} alt={movie.title || movie.name} />
		</div>
	</div>
	<div class="card-body">
		<h2 class="card-title line-clamp-1">{movie.title || movie.name}</h2>
		<p class="line-clamp-3">{movie.overview}</p>
		<div class="card-actions justify-end">
			<a href="/{movie.media_type}/{movie.id}" class="btn btn-primary">See more</a>
		</div>
	</div>
</div>
