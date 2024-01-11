<script>
	import { getGender } from '$lib/helpers/genderFormatter';
	import MovieCarousel from '$lib/components/features/MovieCarousel.svelte';

	export let data;
	const creditsList = data.sortedList;
	const personInfo = data.personInfo;

	const gender = getGender(personInfo.gender);
</script>

<div class="flex flex-wrap mt-6 gap-5">
	<div class="md:w-3/12 w-full">
		<div class="card bg-base-100 shadow-md">
			<figure>
				<img
					src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${personInfo.profile_path}`}
					alt="Shoes"
				/>
			</figure>
			<div class="card-body">
				<h2 class="card-title text-2xl">Personal Info</h2>

				<div>
					<h3 class="text-lg font-bold">Known For</h3>
					<div>{personInfo.known_for_department}</div>
				</div>

				<div>
					<h3 class="text-lg font-bold">Gender</h3>
					<div>{gender}</div>
				</div>

				<div>
					<h3 class="text-lg font-bold">Birthday</h3>
					<div>{personInfo.birthday}</div>
				</div>

				<div>
					<h3 class="text-lg font-bold">Place of Birth</h3>
					<div>{personInfo.place_of_birth}</div>
				</div>
			</div>
		</div>
	</div>
	<div class="w-full md:w-8/12 mt-5 md:mt-0 p-4">
		<h1 class="text-4xl font-bold pb-6">{personInfo.name}</h1>

		<h2 class="text-2xl font-bold">Biography</h2>
		<div>{personInfo.biography}</div>

		<div>
			<h3 class="text-2xl font-bold mt-6">Known for</h3>
			<div>
				{#key data}
					<MovieCarousel data={creditsList} showWheel={false} />
				{/key}
			</div>
		</div>
	</div>
</div>
