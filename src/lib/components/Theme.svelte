<script lang="ts">
    import { onMount } from 'svelte';
    import { storage } from 'svelte-legos';
    import { writable } from 'svelte/store';
    import { browser } from '$app/environment';
    import Icon from './Icon.svelte';

    const theme = storage(writable(''), 'theme');
    const sun =
        'M11.25 3v2.25c0 .41.33.75.75.75 .41 0 .75-.34.75-.75V3c0-.42-.34-.75-.75-.75 -.42 0-.75.33-.75.75Zm6.58 2.1l-1.6 1.59c-.3.29-.3.76 0 1.06 .29.29.76.29 1.06 0l1.59-1.6c.29-.3.29-.77 0-1.07 -.3-.3-.77-.3-1.07 0Zm3.16 6.14h-2.25c-.42 0-.75.33-.75.75 0 .41.33.75.75.75h2.25c.41 0 .75-.34.75-.75 0-.42-.34-.75-.75-.75Zm-2.11 6.58l-1.6-1.6c-.3-.3-.77-.3-1.07 0 -.3.29-.3.76 0 1.06l1.59 1.59c.29.29.76.29 1.06 0 .29-.3.29-.77 0-1.07Zm-7.65.91v2.25c0 .41.33.75.75.75 .41 0 .75-.34.75-.75v-2.25c0-.42-.34-.75-.75-.75 -.42 0-.75.33-.75.75Zm-4.56-2.51l-1.6 1.59c-.3.29-.3.76 0 1.06 .29.29.76.29 1.06 0l1.59-1.6c.29-.3.29-.77 0-1.07 -.3-.3-.77-.3-1.07 0Zm-1.45-5H2.97c-.42 0-.75.33-.75.75 0 .41.33.75.75.75h2.25c.41 0 .75-.34.75-.75 0-.42-.34-.75-.75-.75Zm2.5-4.56l-1.6-1.6c-.3-.3-.77-.3-1.07 0 -.3.29-.3.76 0 1.06l1.59 1.59c.29.29.76.29 1.06 0 .29-.3.29-.77 0-1.07Zm7.24 5.3c0 1.65-1.35 3-3 3 -1.66 0-3-1.35-3-3 0-1.66 1.34-3 3-3 1.65 0 3 1.34 3 3Zm1.5-.001c0-2.49-2.02-4.5-4.5-4.5 -2.49 0-4.5 2.01-4.5 4.5 0 2.48 2.01 4.5 4.5 4.5 2.48 0 4.5-2.02 4.5-4.5Z';
    const moon =
        'M21.46 14.3c-1.1.45-2.28.69-3.47.69 -4.98-.01-9.01-4.03-9.01-9.01 0-1.21.23-2.38.69-3.47 .25-.62-.37-1.24-.99-.99 -3.92 1.63-6.46 5.45-6.46 9.69C2.21 17 6.92 21.7 12.72 21.7c4.23 0 8.06-2.55 9.69-6.46 .25-.62-.37-1.24-.99-.99Zm.57 1.38l-.99-.99c-1.4 3.35-4.68 5.53-8.31 5.53 -4.98-.01-9.01-4.03-9.01-9C3.71 7.58 5.9 4.3 9.25 2.91l-.99-.99c-.53 1.26-.81 2.63-.81 4.04 0 5.79 4.7 10.5 10.5 10.5 1.38 0 2.76-.28 4.04-.81Z';

    onMount(async () => {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
            $theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            $theme = 'light';
        }
    });

    const toggleTheme = () => {
        if ($theme === 'dark') {
            $theme = 'light';
        } else {
            $theme = 'dark';
        }
    };

    $: {
        if ($theme === 'dark' && browser) {
            document.documentElement.classList.add('dark');
        } else if (browser) {
            document.documentElement.classList.remove('dark');
        }
    }
</script>

<button
    type="button"
    aria-pressed={$theme === 'dark'}
    class="h-12 w-12 flex items-center justify-center text-brand"
    on:click={toggleTheme}>
    <span class="sr-only">
        {`Activate ${$theme === 'dark' ? 'light' : 'dark'} theme.`}
    </span>
    <Icon role="img" hidden={true} path={$theme === 'dark' ? sun : moon} />
</button>
