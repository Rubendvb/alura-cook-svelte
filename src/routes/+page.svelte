<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import Category from '$components/ingredients/Category.svelte';
	import TagLink from '$components/shared/TagLink.svelte';
	import Title from '$components/shared/Title.svelte';

	import categories from '$lib/json/categorias.json';
	import { arrayList } from '$lib/stores/list';

	let emptyList = $derived($arrayList.length === 0);

	beforeNavigate((navigation) => {
		if (emptyList && navigation.to?.route.id === '/recipes') {
			navigation.cancel();
		}
	});
</script>

<svelte:head>
	<title>Alura Cook</title>
</svelte:head>

<main>
	<Title tag={'h1'}>Ingredientes</Title>

	<div class="info">
		<p>Selecione abaixo os ingredientes que você deseja usar nesta refeição:</p>
		<p>*Atenção: consideramos que você tenha em casa sal, pimenta e água.</p>
	</div>

	<ul class="categories">
		{#each categories as category (category.nome)}
			<Category {...category} />
		{/each}
	</ul>

	<div class="searchRecipes">
		<TagLink href="/recipes" disabled={emptyList}>Buscar Receitas</TagLink>
	</div>
</main>

<style>
	.info {
		margin-bottom: 3.375rem;
	}

	.info > p {
		line-height: 2rem;
	}

	.categories {
		margin-bottom: 4.6875rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.5rem;
	}

	.searchRecipes {
		display: flex;
		justify-content: center;
	}
</style>
