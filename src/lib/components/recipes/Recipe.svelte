<script lang="ts">
	import Card from '../shared/Card.svelte';

	import type { IRecipe } from '$lib/interfaces/IRecipe';

	let { imagem, ingredientes, nome }: IRecipe = $props();
</script>

<Card>
	<img class="recipe-img" src="/imagens/receitas/{imagem}" alt={nome} />

	<div class="recipe-info">
		<h3 class="recipe-name">{nome}</h3>
	</div>
</Card>

<style>
	.recipe-img {
		width: 100%;
		height: 150px;
	}

	.recipe-info {
		padding: 0.75rem 0.875rem;
	}

	.recipe-name {
		font-size: 1.125rem;
	}
</style>
