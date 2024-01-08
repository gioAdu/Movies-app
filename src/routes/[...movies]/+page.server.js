import { getMovies } from '$lib/api/api.js';

export async function load({ params }) {
	const [type, id] = params.movies.split('/');

	const movieDetails = await getMovies(`/${type}/${id}`);

	return { movieDetails };
}
