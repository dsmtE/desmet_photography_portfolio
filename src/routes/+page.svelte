<!-- <script lang="ts" context="module">
	export type ImageInfo = {
		src: string;
		preview?: string;
		width: number;
		height: number;
		alt?: string;
		description?: string;
	};
</script> -->

<script lang="ts">
	import PhotoswipeGallery from 'svelte-photoswipe-gallery';
	import { images } from '$src/images.json';
	
	let gallery: PhotoswipeGallery;
	
	// // Try load image dynamically
	
	// import { onMount } from 'svelte';
	// let images: ImageInfo[] = [];

	// const loadImage = (url: string): Promise<HTMLImageElement> => new Promise((resolve, reject) => {
	// 	const img = new Image();
	// 	img.onload = () => resolve(img)
	// 	img.onerror = reject
	// 	img.src = url;
	// });
	
	// onMount(async () => {
	// 	const postsFiles = import.meta.glob('$static/images/*.jpg', { eager: true});

	// 	for (const path in postsFiles) {
	// 		const real_path = path.replace('static/', '');
			
	// 		// load image in order to get width and height
	// 		var img = new Image();
	// 		img.src = real_path;
	// 		img.onload = function() {
	// 			console.log('load img at path:' + real_path + ' (' + img.width + 'x' + img.height + ')');
	// 			images = [...images, {
	// 				src: real_path,
	// 				width: img.width,
	// 				height: img.height,
	// 			}];
	// 			console.log(images);
				
	// 		}
	// 	}
	// });
  
</script>

<section>
	<PhotoswipeGallery
	bind:this={gallery} 
	maxColumnWidth={400}
	{images}
	showDescription="{false}"
	showDownloadButton="{false}"
	showFullscreenButton="{true}"
/>
</section>
