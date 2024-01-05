import { json } from '@sveltejs/kit';
import { getMovies } from '../../lib/api/api.js';

export async function POST({ request }) {
  const { time , type } = await request.json()

  const moviesData = await getMovies(`/trending/${type}/${time}`);
  return json({ status: 200, moviesData });

}
