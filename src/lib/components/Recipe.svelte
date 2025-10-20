<script>
	import Card from './Card.svelte';
</script>

<Card>
	<img class="recipe-img" src="/imagens/receitas/alho_assado.png" alt="Alho assado" />

	<div class="recipe-info">
		<h3 class="recipe-name">Alho assado</h3>
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
