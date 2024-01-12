<script>
	import '../app.css';

	import Header from '$lib/components/navigation/Header.svelte';
</script>

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
