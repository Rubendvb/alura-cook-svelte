<script lang="ts">
	import { arrayList } from '$lib/stores/list';
	import Tag from './Tag.svelte';

	let { ingredient } = $props();
	let selected = $state(false);

	function handleClick() {
		selected = !selected;

		if (selected) {
			if (!$arrayList.includes(ingredient)) {
				$arrayList = [...$arrayList, ingredient];
			}
		} else {
			$arrayList = $arrayList.filter((item) => item !== ingredient);
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
