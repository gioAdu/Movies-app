<script>
	export let data;

	const movieData = data.movieDetails;
	const formattedYear = new Date(movieData.release_date).getFullYear();

	const formattedDate = new Date(movieData.release_date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric'
	});

	const test = movieData.genres
		.map((genre, i) => `${genre.name}${i < movieData.genres.length - 1 ? ', ' : ' • '}`)
		.join('');
</script>

<div
	class="full-width-div"
	style="background-image: url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces{movieData.backdrop_path})"
>
	<div class="overlay">
		<div class="container mx-auto">
			<div class="card card-side shadow-xl text-white py-8">
				<img
					src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}`}
					alt="poster"
					class="rounded"
				/>
				<div class="card-body">
					<h1 class="card-title text-4xl font-bold">
						{movieData.title} <span class="text-gray-300 font-normal">({formattedYear})</span>
					</h1>
					<div>
						<span>{formattedDate} •</span>
						{test}
					</div>
					<p>{movieData.overview}</p>
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
