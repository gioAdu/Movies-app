<script>
	import ThemeController from '$lib/components/ThemeController.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

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

			<div
				class="dropdown"
				class:dropdown-hover={enableDropdownHover}
				on:mouseenter={() => (enableDropdownHover = true)}
				role="button"
				tabindex="0"
			>
				<div tabindex="-1" role="button" class="btn btn-accent m-1">Movies</div>

				<ul
					tabindex="-1"
					class="dropdown-content z-[1] menu p-2 bg-accent rounded-md w-52 text-neutral"
				>
					<li><a href="/movies" on:click={() => (enableDropdownHover = false)}>Popular</a></li>
					<li><a href="/" on:click={() => (enableDropdownHover = false)}>Top rated</a></li>
				</ul>
			</div>

			<div
				class="dropdown dropdown-hover"
				class:dropdown-hover={enableDropdownHover}
				on:mouseenter={() => (enableDropdownHover = true)}
				role="button"
				tabindex="0"
			>
				<div tabindex="-1" role="button" class="btn btn-accent m-1">TV Shows</div>

				<ul
					tabindex="-1"
					class="dropdown-content z-[1] menu p-2 bg-accent rounded-md w-52 text-neutral"
				>
					<li><a href="/movies" on:click={() => (enableDropdownHover = false)}>Popular</a></li>
					<li><a href="/" on:click={() => (enableDropdownHover = false)}>Top rated</a></li>
				</ul>
			</div>
		</div>

		<ThemeController {isDark} />
	</div>
</nav>
