<script>
    import '../app.postcss';
    import '@fontsource-variable/manrope';
    import Menu from '$lib/components/Menu.svelte';
    import Theme from '$lib/components/Theme.svelte';
    import GithubLink from '$lib/components/GithubLink.svelte';
    import profile from '$lib/assets/global/profile.jpg';
</script>

<svelte:head>
    <title>markh.dev</title>
</svelte:head>

<!-- prettier-ignore -->
<div class="min-h-screen flex flex-col">

    <!-- HEADER -->
    <header class="h-20 md:h-24 flex items-center">
        <div class="container mx-auto flex justify-between items-center">

            <a href="/"
               aria-label="Go to home page."
               class="text-lg text-brand uppercase font-mono text-yellow-500 flex items-center">
                <img
                    class="w-8 h-8 rounded-lg mr-4"
                    src={profile}
                    alt="Mark Hafemann" />
                <span class="pt-1">
                    Mark Hafemann
                </span>
            </a>

            <div class="flex items-center">
                <Theme />
                <Menu />
            </div>

        </div>
    </header>
    <!-- /HEADER -->

    <!-- MAIN -->
    <main class="flex-1">
        <div class="container mx-auto">
            <slot />
        </div>
    </main>
    <!-- /MAIN -->

    <!-- FOOTER -->
    <footer class="p-4">
        <div class="container mx-auto">
            <div class="flex justify-between items-center w-full text-dim">
                <small class="">&#169; 2023 Mark Hafemann</small>
                <GithubLink />
            </div>
        </div>
    </footer>
    <!-- /FOOTER -->

</div>
