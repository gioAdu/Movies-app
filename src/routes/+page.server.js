import { getMovies } from '../lib/api/api.js';

export async function load({  params }) {
	const moviesData = await getMovies(`/trending/movie/day`);
	const TVData = await getMovies(`/trending/tv/day`);

	return { moviesData , TVData };
}
