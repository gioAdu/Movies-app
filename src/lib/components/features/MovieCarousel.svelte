<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import { slide } from 'svelte/transition';
	import MovieCard from '$lib/components/common/MovieCard.svelte';

	export let data;

	let emblaApi;
	let options = { dragFree: true, slidesToScroll: 2};
	let plugins = [Autoplay({ delay: 5000, stopOnMouseEnter: true, stopOnInteraction: false })];

	const onInit = (event) => {
		emblaApi = event.detail;
	};
</script>

<div class="embla" use:emblaCarouselSvelte={{ options, plugins }} on:emblaInit={onInit}>
	<div class="embla__container" transition:slide={{ duration: 400 }}>
		{#each data as movie}
			<div
				class="embla__slide p-2 shrink-0 grow-0 basis-full sm:basis-1/2 md:basis-1/3 xl:basis-1/4 mx-auto"
			>
				<MovieCard {movie}/>
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
