<script>
	export let data;

	const movieData = data.movieDetails;
	console.log(movieData);
</script>

<div
	class="full-width-div"
	style="background-image: url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces{movieData.backdrop_path})"
>
	<div class="overlay py-4">
		<div class="container mx-auto text-white">
			<h1>{movieData.title}</h1>
			<p>{movieData.overview}</p>
			<img
				src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}`}
				alt="poster"
				class="rounded"
			/>
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
