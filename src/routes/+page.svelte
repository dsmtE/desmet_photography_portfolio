<script>
	import PhotoswipeGallery from 'svelte-photoswipe-gallery';
	import { images } from '$src/images.json';
</script>

<section>
	<PhotoswipeGallery
	maxColumnWidth={400}
	{images}
	showDescription="{false}"
	showDownloadButton="{false}"
	showFullscreenButton="{true}"
/>
</section>
