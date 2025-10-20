<script>
	import Recipe from '$components/Recipe.svelte';
	import Title from '$components/Title.svelte';
</script>

<svelte:head>
	<title>Alura Cook | Receitas</title>
</svelte:head>

<main>
	<Title tag="h1">Receitas</Title>

	<div class="info">
		<p class="green">Resultados encontrados: 0</p>

		<p>Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!</p>
	</div>

	<ul class="recipes">
		<li>
			<Recipe />
		</li>
		<li>
			<Recipe />
		</li>
		<li>
			<Recipe />
		</li>
		<li>
			<Recipe />
		</li>
	</ul>
</main>

<a href="/">Voltar</a>

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
</style>
