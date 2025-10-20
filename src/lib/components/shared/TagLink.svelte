<script lang="ts">
	import Tag from './Tag.svelte';

	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		href: string;
		disabled?: boolean;
	};

	let { children, href, disabled }: Props = $props();
</script>

<a {href}>
	<Tag active size="lg" {disabled}>
		{@render children?.()}
	</Tag>
</a>
