<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import Tag from '$components/shared/Tag.svelte';

	import { arrayList } from '$lib/stores/list';

	let { ingredient } = $props();

	function removeIngredient() {
		arrayList.removeIngredient(ingredient);
	}
</script>

<div class="my-ingredient-container" transition:scale={{ delay: 200 }}>
	<Tag active>
		<button class="close" aria-label="Botão remover" onclick={removeIngredient}></button>
		{ingredient}
	</Tag>

	<button class="remove" onclick={removeIngredient}>Remover</button>
</div>

<style>
	.my-ingredient-container {
		position: relative;
	}

	.close {
		background-image: url('/icones/close.svg');
		height: 10px;
		width: 10px;
		cursor: pointer;
		position: absolute;
		top: 4px;
		right: 4px;
	}

	.remove {
		line-height: 24px;
		font-size: 0.875rem;
		color: var(--laranja);
		cursor: pointer;
	}
</style>
