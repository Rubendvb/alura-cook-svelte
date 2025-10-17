<script lang="ts">
	import Category from '$components/Category.svelte';
	import Header from '$components/Header.svelte';
	import List from '$components/List.svelte';
	import Title from '$components/Title.svelte';
	import categories from '$lib/json/categorias.json';
</script>

<svelte:head>
	<title>Alura Cook</title>
</svelte:head>

<div class="main-container">
	<Header />

	<div class="main-style">
		<div class="list-container">
			<List />

			<div class="divider"></div>
		</div>

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
		</main>
	</div>
</div>

<style>
	.main-container {
		display: flex;
		flex-direction: column;
		min-height: 100dvh;
	}

	.main-style {
		text-align: center;
		padding: 0 5vw 3.375rem;
		flex: 1;
	}

	.list-container {
		margin-bottom: 2rem;
	}

	.divider {
		width: 40vw;
		height: 2px;
		background-color: var(--verde);
		margin: 0 auto;
	}

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
</style>
