<script lang="ts">
	import NavBar from '$components/NavBar.svelte';
	import './styles.css';
	import { Svrollbar } from 'svrollbar';
	import { base } from '$app/paths';
	
	const navItems = [
		{ label: 'Gallerie', href:  `${base}/` },
		{ label: 'À propos', href: `${base}/about` },
	];
	
</script>

<div class="app">
	<header>
		<NavBar items = {navItems} />
		<div class="corner">
		</div>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<p>Enguerrand DE SMET</p>
	</footer>
	<Svrollbar margin = {{ top: 10, buttom: 10}} />
</div>

<style lang="postcss">
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		max-width: 100%;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 1024px) {
		main {
			max-width: 90%;
		}
	}
	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}

	/* svrollbar */
	:global(html, body) {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	:global(html::-webkit-scrollbar, body::-webkit-scrollbar) {
		/* hide scrollbar */
		display: none;
	}
	:root {
		--svrollbar-track-radius: 6px;
		--svrollbar-thumb-width: 6px;
		--svrollbar-thumb-background: linear-gradient(45deg, var(--color-theme-1), var(--color-theme-2));
		--svrollbar-thumb-opacity: 0.7;
  	}

</style>
