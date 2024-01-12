<script>
	import '../app.css';

	import { title, description } from '$lib/stores/store';
	import Header from '$lib/components/navigation/Header.svelte';
</script>

<svelte:head>
	<title>{$title} - CinemaScope</title>
	<meta
		name="description"
		content={$description}
	/>
</svelte:head>

<Header />

<div class="container mx-auto pb-10">
	<slot />
</div>

<style>
	:global(html) {
		overflow-x: hidden;
		font-family: 'Source Sans 3', sans-serif;
	}
</style>
