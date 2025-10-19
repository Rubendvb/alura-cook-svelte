<script lang="ts">
	import Tag from './Tag.svelte';

	let { ingredient, addIngredient, removeIngredient } = $props();
	let selected = $state(false);

	function handleClick() {
		selected = !selected;

		if (selected) {
			addIngredient(ingredient);
		} else {
			removeIngredient(ingredient);
		}
	}
</script>

<button onclick={handleClick}>
	<Tag active={selected}>{ingredient}</Tag>
</button>

<style>
	button {
		cursor: pointer;
	}
</style>
