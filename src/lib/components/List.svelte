<script>
	import Tag from './Tag.svelte';

	let { ingredients } = $props();
</script>

<section class="list">
	<h2>Sua lista:</h2>

	<ul class="ingredients">
		{#each ingredients as ingredient (ingredient)}
			<li>
				<Tag active>{ingredient}</Tag>
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
