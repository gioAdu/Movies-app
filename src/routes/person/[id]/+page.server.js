import { getData } from '$lib/api/api.js';

export async function load({ params }) {
  const id = params.id;

  const person_info = await getData(`/person/${id}`);
  const credits_info = await getData(`/person/${id}/combined_credits`);

  const sortedList = credits_info.cast.sort((a, b) => b.popularity - a.popularity).slice(0, 15);
  return { sortedList , person_info }
}
