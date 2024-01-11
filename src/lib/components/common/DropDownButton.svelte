<script>
	export let title;
	export let items;
	export let type;
	let enableDropdownHover = true;
</script>

<div
	class="dropdown"
	class:dropdown-hover={enableDropdownHover}
	on:mouseenter={() => (enableDropdownHover = true)}
	role="button"
	tabindex="0"
>
	<div tabindex="-1" role="button" class="btn btn-accent m-1">{title}</div>

	<ul tabindex="-1" class="dropdown-content z-[1] menu p-2 bg-accent rounded-md w-52 text-neutral">
		{#each items as item}
			<li>
				<a
					href={type === 'person' ? `/${type}` : `/${type}/${item}`}
					on:click={() => (enableDropdownHover = false)}
				>
					{item}
				</a>
			</li>
		{/each}
	</ul>
</div>
