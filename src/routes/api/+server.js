import { json } from '@sveltejs/kit';
import { getData } from '$lib/api/api.js';

export async function POST({request} ) {
	const pageData = await request.json();

	const { showType, showcase } = pageData.params;
	const page = pageData.pageNumber;

	const newData = await getData(`/${showType}/${showcase}?page=${page}`);

	return json({ status: 200, newData });
}
