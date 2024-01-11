<script>
	import ThemeController from '$lib/components/features/ThemeController.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import DropDownButton from './DropDownButton.svelte';
	import BurgerMenu from './BurgerMenu.svelte';
	let isDark = JSON.parse($page.data.isDark);

	onMount(() => {
		const cookieIsDark = document.cookie.split('; ').find((row) => row.startsWith('isDark'));
		isDark = cookieIsDark ? JSON.parse(cookieIsDark.split('=')[1]) : false;
	});
</script>

<nav class="bg-neutral">
	<div class="navbar flex justify-between container mx-auto">
		<div class="flex gap-2">
			<a href="/" class="text-4xl text-white">Home</a>

			<div class=" hidden sm:block">
				<DropDownButton type='movie' title="Movies" items={['popular', 'top_rated']} />

				<DropDownButton type='tv' title="TV Shows" items={['popular', 'top_rated']} />
			</div>
		</div>

		<ThemeController {isDark} />

		<div class="sm:hidden">
			<BurgerMenu />
		</div>
	</div>
</nav>
