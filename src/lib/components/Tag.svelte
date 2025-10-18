<script lang="ts">
	let { children, active = false, selectable = false } = $props();

	function handleClick() {
		if (selectable) {
			active = !active;
		}
	}
</script>

<button class="tag active" class:active onclick={handleClick}>
	{@render children?.()}
</button>

<style>
	.tag {
		height: 48px;
		border-radius: 8px;
		padding: 1rem;
		color: var(--cor-texto-principal);
		text-align: center;
		background-color: var(--cinza);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.active {
		color: var(--branco);
		background-color: var(--laranja);
	}
</style>
