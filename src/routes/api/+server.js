import { json } from '@sveltejs/kit';
import { getData } from '$lib/api/api.js';

export async function POST({ request }) {
	const { time, type } = await request.json();

	const moviesData = await getData(`/trending/${type}/${time}`);
	return json({ status: 200, moviesData });
}
