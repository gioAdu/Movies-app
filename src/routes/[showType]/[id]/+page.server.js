import { getData } from '$lib/api/api.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const { showType, id } = params;

	const movieDetails = await getData(`/${showType}/${id}`);

	const cast = await getData(`/${showType}/${id}/credits`);

	if (movieDetails.success === false || cast.success === false) {
		error(404, 'Page not found');
	}
	return { movieDetails, cast };
}
