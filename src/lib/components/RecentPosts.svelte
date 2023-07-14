<script lang="ts">
    import { onMount } from 'svelte';

    let posts = [
        {
            title: 'Post 1',
            date: '2021-01-01',
            author: 'mhafemann',
            url: '/',
        },
        {
            title: 'Post 2',
            date: '2021-01-02',
            author: 'mhafemann',
            url: '/',
        },
        {
            title: 'Post 3',
            date: '2021-01-03',
            author: 'mhafemann',
            url: '/',
        },
    ];
</script>

<h1 class="text-base my-4 text-brand">Recent:</h1>
<ul>
    {#each posts as post}
        <li class="w-full mb-4">
            <a
                href={post.url}
                class="text-base text-sky-600 hover:text-sky-500 visited:text-purple-500 leading-none w-full cursor-pointer">
                {post.title}
            </a>
            <p class="text-xs text-dim leading-none p-0 m-0">
                {post.date} by {post.author}
            </p>
        </li>
    {/each}
</ul>
