<script lang="ts">
	import favicon from '$lib/assets/favicon.png';

	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
	import List from '$components/List.svelte';

	import { arrayList } from '$lib/stores/list';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="main-container">
	<Header />

	<div class="main-style">
		{#if $arrayList.length}
			<div class="list-container">
				<List />

				<div class="divider"></div>
			</div>
		{/if}

		{@render children?.()}
	</div>

	<Footer />
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
</style>
