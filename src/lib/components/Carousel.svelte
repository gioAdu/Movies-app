<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import { slide } from 'svelte/transition';
	import RatingWheel from './RatingWheel.svelte';

	export let data;

	let emblaApi;
	let options = { loop: false, dragFree: true, containScroll: 'keepSnaps', slidesToScroll: 2 };
	let plugins = [Autoplay({ delay: 5000, stopOnMouseEnter: true, stopOnInteraction: false })];

	const onInit = (event) => {
		emblaApi = event.detail;
	};
</script>

<div class="embla" use:emblaCarouselSvelte={{ options, plugins }} on:emblaInit={onInit}>
	<div class="embla__container" transition:slide={{ duration: 400 }}>
		{#each data as movie}
			<div
				class="embla__slide p-2 shrink-0 grow-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 mx-auto"
			>
				<div class="card bg-base-100 shadow-xl">
					<div class="relative">
						<div class="left-20 absolute -bottom-6">
							<RatingWheel {movie} />
						</div>
						<figure>
							<img
								class="rounded-md"
								src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
								alt="Shoes"
							/>
						</figure>
					</div>
					<div class="card-body">
						<h2 class="card-title line-clamp-1">{movie.title || movie.name}</h2>
						<p class="line-clamp-3">{movie.overview}</p>
						<div class="card-actions justify-end">
							<a href="{movie.media_type}/{movie.id}" class="btn btn-primary">See more</a>
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
