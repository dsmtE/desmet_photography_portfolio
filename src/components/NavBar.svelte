<script lang="ts" context="module">
	export type NavItem = {
		label: string;
		href: string;
	};
</script>

<script lang="ts">
	import { page } from '$app/stores';
    import { navigating } from '$app/stores';

    import Icon from 'svelte-awesome';
    import alignRight from 'svelte-awesome/icons/alignRight';

	export let items: NavItem[];
    
    let mobileNavOpened = false;
    const toggleMobileNav = () => mobileNavOpened = !mobileNavOpened;

    // Close the mobile nav when navigating to a new page or press Escape key
    $: if ($navigating) {
        mobileNavOpened = false;
    }

    function onKeyDown(event: KeyboardEvent) {
        if (event.key === 'Escape') mobileNavOpened = false;
	}
</script>

<nav class:dropdown-opened="{mobileNavOpened}">

	<a id="title" href="/">
		Enguerrand DE SMET
	</a>
    
	<ul>
    {#each items as item}
        <li aria-current={$page.url.pathname === item.href ? 'page' : undefined}>
            <a href={item.href}>{item.label}</a>
        </li>
    {/each}
    </ul>

    <button class="mobile-dropdown-toggle" on:click={toggleMobileNav} aria-hidden="true">
        <Icon data={alignRight}/>
    </button>
</nav>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<style lang="postcss">
	nav {
		display: flex;
		align-items: center;
		margin: auto;
        height: 3em;

        @media (min-width: 1024px) {
			max-width: 90%;
	    }

        #title {
            margin-right: auto;
            font-size: 1.5em;
            font-weight: 700;
            text-decoration: none;
            color: var(--color-text);
        }
	}
    
    ul {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
		margin: 0;
		list-style: none;
	}

	li {
        margin-left: 3em;
        color: var(--color-text);

        &[aria-current='page'] {
            color: var(--color-theme-1);
        }
	}

    a {
        text-decoration: none;
        color: inherit;

        &:hover {
            color: var(--color-theme-1);
        }
    }
    
	.mobile-dropdown-toggle {
		display: none;
        background: inherit;
        cursor: pointer;
        border-radius: 5px;
	}

    @media (max-width: 768px) {
        
        #title, .mobile-dropdown-toggle {
            display: initial;
            z-index: 11;
        }
        
        ul {
            z-index: 10;
            /* our initial state */
            opacity: 0; /* fade out */
            transform: translateY(-100%); /* move out of view */
            transition: transform 0.2s, opacity 0.2s; /* transition these smoothly */

            /* first, make our dropdown cover the screen */
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 100vh;
            /* fix nav height on mobile safari, where 100vh is a little off */
            height: -webkit-fill-available;

            /* then, arrange our links top to bottom */
            display: flex;
            flex-direction: column;
            /* center links vertically, push to the right horizontally */
            justify-content: space-evenly;
            align-items: flex-end;

            /* add margins and padding to taste */
            margin: 0;
            padding: 10em 7vw;

            background: white;

            li {
                border: 1px double black;
                border-width: 1px 0;
                padding: 1em;
            }
        }

        nav.dropdown-opened > ul {
            opacity: 1; /* fade in */
            transform: translateY(0); /* move into view */
        }
}

</style>
