<script lang="ts">
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="main-container">
	<Header />

	<div class="main-style">
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
</style>
