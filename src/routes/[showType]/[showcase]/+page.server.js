import { getData } from '$lib/api/api.js';

export async function load({ params }) {
	const searchParams = await params;
	const data = await getData(`/${params.showType}/${params.showcase}?page=1`);
	
	return { showcase: data, params: searchParams };
}
