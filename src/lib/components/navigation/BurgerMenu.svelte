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
				<button on:click={toggleDrawer} tabindex="0">
					<img src="/close_icon.svg" alt="close" />
				</button>
			</li>

			<ul class="menu w-full bg-accent rounded-box mt-8 text-neutral font-bold">
				<li>
					<details>
						<summary>Movies</summary>
						<ul>
							<li><a href="/movie/popular" on:click={toggleDrawer}>Popular</a></li>
							<li><a href="/movie/top_rated" on:click={toggleDrawer}>Top rated</a></li>
						</ul>
					</details>
				</li>

				<li>
					<details>
						<summary>TV Shows</summary>
						<ul>
							<li><a href="/movie/popular" on:click={toggleDrawer}>Popular</a></li>
							<li><a href="/movie/top_rated" on:click={toggleDrawer}>Top rated</a></li>
						</ul>
					</details>
				</li>

				<li>
					<details>
						<summary>Person</summary>
						<ul>
							<li><a href="/person" on:click={toggleDrawer}>Popular</a></li>
						</ul>
					</details>
				</li>
			</ul>
		</ul>
	</div>
</div>
