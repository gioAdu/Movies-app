<script>
	import { getGender } from '$lib/helpers/genderFormatter';
	import { checkProfileImage } from '$lib/helpers/checkProfileImage.js';

	import MovieCarousel from '$lib/components/carousels/MovieCarousel.svelte';
	import { title, description } from '$lib/stores/store';

	export let data;
	const creditsList = data.sortedList;
	const personInfo = data.personInfo;

	$title = `${personInfo.name}`;
	$description = `${personInfo.biography}}`;

	const baseUrl = 'https://image.tmdb.org/t/p/w470_and_h470_face';

	const imagePath = checkProfileImage(personInfo, baseUrl);

	const gender = getGender(personInfo.gender);
</script>

<div class="flex flex-wrap mt-6 gap-5">
	<div class="md:w-3/12 w-full">
		<div class="card bg-base-100 shadow-md">
			<img src={imagePath} alt="Shoes" />
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

		{#if personInfo.biography}
			<h2 class="text-2xl font-bold">Biography</h2>
			<div>{personInfo.biography}</div>
		{/if}

		{#if creditsList}
			<div>
				<h3 class="text-2xl font-bold mt-6">Known for</h3>
				<div>
					{#key data}
						<MovieCarousel data={creditsList} showWheel={false} />
					{/key}
				</div>
			</div>
		{/if}
	</div>
</div>
