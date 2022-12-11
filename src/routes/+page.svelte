<script lang="ts">
	import Masonry from 'svelte-bricks';
	import Box from '$components/Box.svelte';
	import Slider from '$components/Slider.svelte';

	let nItems: number = 30
	$: items = [...Array(nItems).keys()]

	let [minColWidth, maxColWidth, gap] = [200, 800, 20]
	let masonryWidth: number, masonryHeight: number
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>

	<div class="controls">
		<Slider label="nItems" bind:value={nItems} min={1} max={100} />
		<Slider label="minColWidth" bind:value={minColWidth} min={120} max={maxColWidth} />
		<Slider label="maxColWidth" bind:value={maxColWidth} min={minColWidth} max={800} />
		<Slider label="gap" bind:value={gap} min={0} max={50} />
	  </div>
	  
	  <p>
		Masonry size: <span>{masonryWidth}px</span> &times; <span>{masonryHeight}px</span>
		(w &times; h)
	  </p>

	<Masonry
		{items}
		{minColWidth}
		{maxColWidth}
		{gap}
		let:item
		bind:masonryWidth
		bind:masonryHeight
		>
		<Box index={item} />
	</Masonry>
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
