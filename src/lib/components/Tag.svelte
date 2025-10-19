<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		active?: boolean;
		size?: 'md' | 'lg';
	};

	let { children, active = false, size = 'md' }: Props = $props();
</script>

<div class="tag {size}" class:active>
	{@render children?.()}
</div>

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

	.lg {
		font-size: 1.125rem;
		padding: 1rem 1.5rem;
	}
</style>
