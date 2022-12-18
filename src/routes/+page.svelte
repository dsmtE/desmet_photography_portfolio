<script lang="ts">
	import Gallery from 'svelte-gallery';

	import { images } from '$src/images.json';

	let innerWidth = 0
    let innerHeight = 0

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<svelte:window bind:innerWidth bind:innerHeight />

<section>
	<Gallery {images} gutter={4} rowHeight={400} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
		flex: 0.1;
	}

	span {
		padding: 1pt 3pt;
		border-radius: 4pt;
		vertical-align: middle;
		background: #0075ff;
	}

</style>
