<script lang="ts">
	import Card from '../shared/Card.svelte';
	import SelectableIngredient from './SelectableIngredient.svelte';

	import type { ICategory } from '$lib/interfaces/ICategory';

	let { nome, imagem, ingredientes }: ICategory = $props();
</script>

<Card>
	<div class="category-container">
		<img class="category-image" src="/icones/categorias_ingredientes/{imagem}" alt={nome} />

		<h3 class="category-name">{nome}</h3>

		<ul class="ingredients">
			{#each ingredientes as ingredient (ingredient)}
				<li>
					<SelectableIngredient {ingredient} />
				</li>
			{/each}
		</ul>
	</div>
</Card>

<style>
	.category-container {
		padding: 0.75rem 0.5rem;
	}

	.category-image {
		margin-bottom: 0.5rem;
	}

	.category-name {
		font-size: 1.125rem;
		color: var(--verde);
		margin-bottom: 0.875rem;
	}

	.ingredients {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.75rem 1rem;
	}
</style>
