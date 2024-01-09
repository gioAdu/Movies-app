import { getData } from '../lib/api/api.js';

export async function load() {
	const moviesData = await getData(`/trending/movie/day`);
	const TVData = await getData(`/trending/tv/day`);

	return { moviesData, TVData };
}
