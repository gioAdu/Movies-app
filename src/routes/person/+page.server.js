import { getData } from '$lib/api/api.js';

export async function load() {
	const peopleList = await getData('/person/popular')

	return {peopleList};
}
