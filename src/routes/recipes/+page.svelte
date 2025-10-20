<script>
	import Recipe from '$components/recipes/Recipe.svelte';
	import Title from '$components/shared/Title.svelte';

	import { arrayList } from '$lib/stores/list';

	import recipes from '$lib/json/receitas.json';
	import TagLink from '$components/shared/TagLink.svelte';

	let recipesFiltered = $derived(
		recipes.filter((recipe) =>
			recipe.ingredientes.every((ingredient) => $arrayList.includes(ingredient))
		)
	);
</script>

<svelte:head>
	<title>Alura Cook | Receitas</title>
</svelte:head>

<main>
	<Title tag="h1">Receitas</Title>

	<div class="info">
		<p class="green">Resultados encontrados: {recipesFiltered.length}</p>

		{#if recipesFiltered.length}
			<p>Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!</p>
		{:else}
			<p>Não encntramos nenhuma receita com seus ingredientes!</p>
		{/if}
	</div>

	{#if recipesFiltered.length}
		<ul class="recipes">
			{#each recipesFiltered as recipe (recipe.nome)}
				<li>
					<Recipe {...recipe} />
				</li>
			{/each}
		</ul>
	{/if}

	<div class="edit-list">
		<TagLink href="/">Editar lista</TagLink>
	</div>
</main>

<style>
	.info {
		margin-bottom: 3.375rem;
	}

	.info > p {
		line-height: 2rem;
	}

	.info > p.green {
		color: var(--verde);
	}

	.recipes {
		text-align: start;
		margin-bottom: 3.75rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.5rem;
	}

	.edit-list {
		display: flex;
		justify-content: center;
	}
</style>
