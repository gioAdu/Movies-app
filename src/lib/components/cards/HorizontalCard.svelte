<script>
	import { checkMovieImage } from '$lib/helpers/checkMovieImage.js';

	export let movie;

	$: imagePath = checkMovieImage(movie.poster_path || movie.profile_path, 'https://image.tmdb.org/t/p/w154');
</script>

<div class="card card-side bg-base-100 mb-2 w-full">
	<figure class="w-1/3 max-w-20 h-auto">
		<img class="rounded-md object-cover aspect-auto" src={imagePath} alt={movie.title || movie.name} />
	</figure>
	<div class="card-body w-2/3">
		<h2 class="card-title line-clamp-1 grow-0">{movie.title || movie.name}</h2>
		{#if movie.overview}
			<p class="line-clamp-3 grow-0">{movie.overview}</p>
		{/if}
	</div>
</div>
