<script>
	let { children } = $props();
</script>

<div class="card">
	{@render children?.()}
</div>

<style>
	.card {
		width: var(--width, 300px);
		min-height: 100%;
		background-color: var(--branco);
		box-shadow: 4px 4px 10px 1px rgba(0, 0, 0, 0.1);
	}
</style>
