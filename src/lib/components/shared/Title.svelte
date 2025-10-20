<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
		children: Snippet;
	};

	let { children, tag }: Props = $props();
</script>

<svelte:element this={tag} class="title tag-{tag}">
	{@render children?.()}
</svelte:element>

<style>
	.title {
		color: var(--verde);
		text-transform: uppercase;
		line-height: 2rem;
		margin-bottom: 1rem;
	}

	.tag-h1 {
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 2rem;
		margin-bottom: 1rem;
	}

	.tag-h2 {
		font-size: 1rem;
		font-weight: 700;
	}
</style>
