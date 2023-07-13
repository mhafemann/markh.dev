<!-- https://css-tricks.com/accessible-svg-icons/ -->
<script lang="ts">
    export let path = '';
    export let title = '';
    export let role = '';
    export let hidden = false;
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden={hidden}
    width="24"
    height="24"
    {role}>
    <path fill-rule="evenodd" d={path} clip-rule="evenodd" />
    {#if title}
        <title>{title}</title>
    {/if}
</svg>
