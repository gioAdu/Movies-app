import { json } from '@sveltejs/kit';
import { getData } from '$lib/api/api';

export async function POST({ request }) {
	const { data } = await request.json();

	const resp = await getData(`/search/multi?query=${data}`);

	return json({ status: 200, filteredData: resp });
}
