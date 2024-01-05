<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import ThemeController from '../lib/components/ThemeController.svelte';

	let isDark = JSON.parse($page.data.isDark);

	onMount(() => {
		const cookieIsDark = document.cookie.split('; ').find((row) => row.startsWith('isDark'));
		isDark = cookieIsDark ? JSON.parse(cookieIsDark.split('=')[1]) : false;
	});

	let enableDropdownHover = true;
</script>

<nav class="bg-neutral">
	<div class="navbar flex justify-between container mx-auto">
		<div class="flex gap-2">
			<a href="/" class="text-4xl text-white">Home</a>

			<button
				class="dropdown"
				class:dropdown-hover={enableDropdownHover}
				on:mouseenter={() => (enableDropdownHover = true)}
			>
				<div tabindex="0" role="button" class="btn btn-accent m-1">Movies</div>

				<ul
					tabindex="-1"
					class="dropdown-content z-[1] menu p-2 bg-accent rounded-md w-52 text-neutral"
				>
					<li><a href="/movies" on:click={() => (enableDropdownHover = false)}>Popular</a></li>
					<li><a href="/" on:click={() => (enableDropdownHover = false)}>Top rated</a></li>
				</ul>
			</button>

			<button
				class="dropdown dropdown-hover"
				class:dropdown-hover={enableDropdownHover}
				on:mouseenter={() => (enableDropdownHover = true)}
			>
				<div tabindex="0" role="button" class="btn btn-accent m-1">TV Shows</div>

				<ul
					tabindex="-1"
					class="dropdown-content z-[1] menu p-2 bg-accent rounded-md w-52 text-neutral"
				>
					<li><a href="/movies" on:click={() => (enableDropdownHover = false)}>Popular</a></li>
					<li><a href="/" on:click={() => (enableDropdownHover = false)}>Top rated</a></li>
				</ul>
			</button>
		</div>

		<ThemeController {isDark} />
	</div>
</nav>

<div class="container mx-auto pb-10">
	<slot />
</div>

<style>
	:global(html) {
		overflow-x: hidden;
	}
</style>
