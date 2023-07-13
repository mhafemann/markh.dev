<script lang="ts">
    import Icon from './Icon.svelte';

    const bars =
        'M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z';
    const minus =
        'M3.75 12v0c0-.42.33-.75.75-.75h15v0c.41 0 .75.33.75.75 0 .41-.34.75-.75.75h-15v0c-.42 0-.75-.34-.75-.75Z';

    let active = false;
</script>

<button
    type="button"
    class="h-12 w-12 flex items-center justify-center -mr-2 md:-mr-0"
    on:click={() => {
        active = !active;
    }}
    class:text-red-500={active}>
    <span class="sr-only">
        {`${active ? 'Close' : 'Open'} main menu.`}
    </span>
    <Icon hidden={true} path={active ? minus : bars} />
</button>
