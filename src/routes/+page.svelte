<script>
	import Gallery from 'svelte-gallery';
	import { onMount } from "svelte";

	import { images } from '$src/images.json';

	let innerWidth = 0
    let innerHeight = 0
	let galleryID = 'gallery'
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<section>
	<Gallery {images} gutter={4} rowHeight={400} />
</section>
