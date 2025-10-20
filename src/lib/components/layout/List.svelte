<script>
	import MyIngredient from './MyIngredient.svelte';

	import { arrayList } from '$lib/stores/list';
</script>

<section class="list">
	<h2>Sua lista:</h2>

	<ul class="ingredients">
		{#each $arrayList as ingredient (ingredient)}
			<li>
				<MyIngredient {ingredient} />
			</li>
		{/each}
	</ul>
</section>

<style>
	.list {
		padding-bottom: 1.625rem;
	}

	.list > h2 {
		font-size: 1.5rem;
		color: var(--laranja);
		margin-bottom: 1.5rem;
		line-height: 2rem;
		font-weight: 700;
	}

	.ingredients {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.75rem 1.875rem;
	}
</style>
