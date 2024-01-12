import { API_KEY } from '$env/static/private';

export async function getData(url) {
	const baseUrl = 'https://api.themoviedb.org/3';

	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${API_KEY}`
		}
	};
	
	try {
		const response = await fetch(`${baseUrl}${url}`, options);
		const data = await response.json();

		return data;
	} catch (error) {
		console.error(error);
	}
}
