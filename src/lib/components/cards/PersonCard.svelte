<script>
	import { checkProfileImage } from '$lib/helpers/checkProfileImage.js';

	export let person;
	export let baseSrc;

	const imagePath = checkProfileImage(person, baseSrc);
</script>

<div class="card bg-base-100 shadow-md h-full">
	<figure>
		<img class="rounded-md border" src={imagePath} alt={person.name} />
	</figure>

	<div class="card-body">
		<h2 class="card-title line-clamp-1">{person.name}</h2>

		<p class="line-clamp-3 text-sm font-bold">
			{#each person.known_for as knownFor}
				<span>{`${knownFor.title || knownFor.name}, `}</span>
			{/each}
		</p>

		<div class="card-actions justify-end mt-2">
			<a href="/person/{person.id}" class="btn btn-primary">See more</a>
		</div>
	</div>
</div>
