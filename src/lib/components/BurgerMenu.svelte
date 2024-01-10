<script>
	let isDrawerOpen = false;
	function toggleDrawer() {
		isDrawerOpen = !isDrawerOpen;
	}
</script>

<div class="drawer z-10">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" bind:checked={isDrawerOpen} />
	<div class="drawer-content">
		<label for="my-drawer" class="btn btn-accent drawer-button">
			<img src="/burger_icon.svg" alt="burger menu" />
		</label>
	</div>
	<div class="drawer-side">
		<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>

		<ul class="menu p-4 w-full min-h-full bg-neutral text-white relative">
			<li class="absolute right-4 top-4 z-10">
				<button  on:click={toggleDrawer} tabindex="0">
					<img src="/close_icon.svg" alt="close" />
				</button>

			</li>

			<li><a href="/" on:click={toggleDrawer}>Sidebar Item 1</a></li>
			<li><a href="/" on:click={toggleDrawer}>Sidebar Item 2</a></li>
		</ul>
	</div>
</div>
