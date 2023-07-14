import MagicString from 'magic-string';
import { parse, walk } from 'svelte/compiler';
import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/index.js';

loadLanguages();

const sveltePrism = {
    markup: async ({ content, filename }) => {
        const s = new MagicString(content);
        const ast = parse(content);

        walk(ast.html, {
            enter(node) {
                if (node.type === 'Element' && node.name === 'code') {
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

                    const contentStart = node.children[0].start;
                    const contentEnd =
                        node.children[node.children.length - 1].end;
                    const cont = s
                        .slice(contentStart + 3, contentEnd - 3)
                        .toString();

                    console.log(s.slice(node.start, node.end).toString());

                    const highlighted = Prism.highlight(
                        cont.trim(),
                        Prism.languages[lang],
                        lang
                    );

                    s.update(
                        contentStart,
                        contentEnd,
                        `{@html \`${highlighted}\`}`
                    );
                }
            },
        });

        return {
            code: s.toString(),
            map: s.generateMap({ hires: true, file: filename }),
        };
    },
    script: () => {},
    style: () => {},
};

export default sveltePrism;
