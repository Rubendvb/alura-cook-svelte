<script lang="ts">
	import type { ICategory } from '$lib/interfaces/ICategory';
	import Tag from './Tag.svelte';

	let { nome, imagem, ingredientes }: ICategory = $props();
</script>

<div class="category-container">
	<img class="category-image" src="/icones/categorias_ingredientes/{imagem}" alt={nome} />

	<h3 class="category-name">{nome}</h3>

	<ul class="ingredients">
		{#each ingredientes as ingrediente (ingrediente)}
			<li>
				<Tag active>{ingrediente}</Tag>
			</li>
		{/each}
	</ul>
</div>

<style>
	.category-container {
		width: 300px;
		min-height: 100%;
		background-color: var(--branco);
		box-shadow: 4px 4px 10px 1px rgba(0, 0, 0, 0.1);
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
