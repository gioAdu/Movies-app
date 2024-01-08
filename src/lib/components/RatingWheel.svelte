<script>
	export let movie;
	const getRating = (rating) => {
		return Math.round(rating * 10);
	};

	const getRatingClass = (rating) => {
		const score = getRating(rating);

		if (score > 70) {
			return 'text-success';
		} else if (score > 50) {
			return 'text-warning';
		} else {
			return 'text-error';
		}
	};
</script>

<div
	class="radial-progress bg-black
    {getRatingClass(movie.vote_average)}"
	style="--value:{getRating(movie.vote_average)}; --size: 3rem"
	role="progressbar"
>
	{getRating(movie.vote_average)}
</div>
