<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import { slide } from 'svelte/transition';

	export let data;

	let emblaApi;
	let options = { loop: false, dragFree: true, containScroll: 'keepSnaps', slidesToScroll: 2 };
	let plugins = [Autoplay({ delay: 5000, stopOnMouseEnter: true, stopOnInteraction: false })];

	const onInit = (event) => {
		emblaApi = event.detail;
	};

	const checkProfileImage = (cast) => {
		return cast.profile_path ? `https://image.tmdb.org/t/p/w138_and_h175_face${cast.profile_path}` : '/default_icon.svg';
	}
</script>

<div class="embla" use:emblaCarouselSvelte={{ options, plugins }} on:emblaInit={onInit}>
	<div class="embla__container" in:slide={{ duration: 400 }}>
		{#each data as cast}
			<div
				class="embla__slide p-2 shrink-0 grow-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/6"
			>
				<div class="card bg-base-100 shadow-md  h-full">
					<div class="relative">
						<figure>
							<img
								class="rounded-md"
								src={checkProfileImage(cast)}
								alt={cast.name}
							/>
						</figure>
					</div>
					<div class="card-body">
						<h2 class="card-title line-clamp-1">{cast.name}</h2>
						<p class="line-clamp-2">{cast.character}</p>
						<div class="card-actions justify-end">
							<a href="/person/{cast.id}?{cast.name}" class="btn btn-primary">See more</a>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.embla {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
	}
</style>
