<script lang="ts">
	import { arrayList } from '$lib/stores/list';
	import Tag from './Tag.svelte';

	let { ingredient } = $props();
	let selected = $state(false);

	function handleClick() {
		selected = !selected;

		if (selected) {
			if (!$arrayList.includes(ingredient)) {
				// $arrayList = [...$arrayList, ingredient];

				arrayList.addingIngredient(ingredient);
			}
		} else {
			// $arrayList = $arrayList.filter((item) => item !== ingredient);

			arrayList.removeIngredient(ingredient);
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
