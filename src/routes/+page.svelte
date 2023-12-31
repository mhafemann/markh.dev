<script lang="ts">
    import RecentPosts from '$lib/components/RecentPosts.svelte';
</script>

<p class="md:w-2/3">
    Welcome to my development blog! I'm a hobbyist software developer from
    Dallas, TX looking to get involved in the community. I love exploring new
    tech, finding new ways to automate everything, and tinkering with my homelab
    / website.
</p>

<!-- <RecentPosts /> -->
<!-- prettier-ignore -->
<div class="mt-8">
<pre class="language-js line-numbers">
<code>
{`
let name = "mark";

function greet() {
    let greeting = "hello";
    console.log(greeting);
}

greet();
`}
</code>
</pre>
</div>

<!-- prettier-ignore -->
<div class="mt-8">
<pre class="language-js">
<code>
{`import MagicString from 'magic-string';
import { parse, walk } from 'svelte/compiler';
import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/index.js';

// TODO: Add Svelte language support to Prism.js.
// TODO: Add support for Prism.js plugins.

loadLanguages();

const sveltePrism = {
    markup: ({ content, filename }) => {
        /* 
            create a new MagicString instance and parse the content,
        */
        const ms = new MagicString(content);
        const ast = parse(content);

        /* 
            walk the AST,
        */
        walk(ast.html, {
            enter(node) {
                if (node.type === 'Element' && node.name === 'pre') {
                    /* 
                        get the language from the class attribute of the pre tag,
                    */
                    const lang = node.attributes
                        .filter(attr => {
                            return attr.name === 'class';
                        })[0]
                        .value[0].data.split(' ')
                        .filter(selector => {
                            return selector.startsWith('language-');
                        })
                        .map(selector => {
                            return selector.replace('language-', '');
                        })[0];

                    // TODO: handle when there are no language definitions for 
                    // the specified language.
                    if (!lang) return;

                    const codeTag = node.children.filter(child => {
                        return (
                            child.type === 'Element' && child.name === 'code'
                        );
                    })[0];

                    // TODO: handle when codeTag is undefined but lang is defined
                    if (!codeTag) return;

                    /* 
                        get the start and end of the code tag,
                    */
                    const start = codeTag.children[0].start;
                    const end =
                        codeTag.children[codeTag.children.length - 1].end;

                    const mustacheTag = codeTag.children.filter(child => {
                        return child.type === 'MustacheTag';
                    })[0];

                    /* 
                        If there is no mustache tag or the mustache tag is not
                        a template literal,
                    */
                    if (
                        !mustacheTag ||
                        mustacheTag.expression.type != 'TemplateLiteral'
                    )
                        return;

                    /* 
                        get the content of the mustache tag, trim it, and 
                        highlight it with Prism.js.
                    */
                    const cont = ms
                        .slice(mustacheTag.start + 2, mustacheTag.end - 2)
                        .toString()
                        .trim();
                    const highlighted = Prism.highlight(
                        cont,
                        Prism.languages[lang],
                        lang
                    );

                    /* 
                        replace the mustache tag with the highlighted code -
                        nested in a svelte @html block so that it is not escaped,
                    */
                    ms.update(start, end, \`{@html \`\${highlighted}\`}\`);
                }
            },
        });

        /* 
            return the code and the sourcemap,
        */
        return {
            code: ms.toString(),
            map: ms.generateMap({ hires: true, file: filename }),
        };
    },
    script: () => {},
    style: () => {},
};

export default sveltePrism;
`}
</code>
</pre>
</div>

<pre class="language-css"><code>{`.test { padding: 0px; }`}</code></pre>
