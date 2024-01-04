import { getMovies } from '../lib/api/api.js';

export async function load({ params }) {
  const timePeriod = params.timePeriod ?? 'day';

	const moviesData = await getMovies(`/trending/movie/${timePeriod}`);
	const TVData = await getMovies(`/trending/tv/${timePeriod}`);

	return { moviesData , TVData };
}
