<script lang="ts">
	// import PhotoswipeGallery from 'svelte-photoswipe-gallery';
	import PhotoswipeGallery from "$components/PhotoSwipe/PhotoswipeGallery.svelte";
	import { images } from '$src/images.json';
	import { base } from '$app/paths';
	
	let imagesItems = images.map((image) => ({
		src: `${base}/images/${image.filename}`,
		height: image.height,
		width: image.width,
	}));

	let gallery: PhotoswipeGallery;
</script>

<section>
	<PhotoswipeGallery
	bind:this={gallery} 
	maxColumnWidth={400}
	images={imagesItems}
	showDescription="{false}"
	showDownloadButton="{false}"
	showFullscreenButton="{true}"
/>
</section>
