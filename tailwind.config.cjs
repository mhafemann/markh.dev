const config = {
    mode: 'jit',
    darkMode: 'class',
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        maxWidth: {
            200: '12.5rem',
            300: '18.75rem',
            400: '25rem',
            500: '31.25rem',
            600: '37.5rem',
            700: '43.75rem',
            800: '50rem',
        },
        minWidth: {
            200: '12.5rem',
            300: '18.75rem',
            400: '25rem',
            500: '31.25rem',
            600: '37.5rem',
            700: '43.75rem',
            800: '50rem',
        },
        borderWidth: {
            DEFAULT: '1px',
            0: '0',
            2: '2px',
            3: '3px',
            4: '4px',
            5: '5px',
            6: '6px',
            8: '8px',
        },
        fluidType: {
            // https://github.com/davidhellmann/tailwindcss-fluid-type
            settings: {
                fontSizeMin: 1.125, // 1.125rem === 18px
                fontSizeMax: 1.25, // 1.25rem === 20px
                ratioMin: 1.125, // Multiplicator Min
                ratioMax: 1.2, // Multiplicator Max
                screenMin: 20, // 20rem === 320px
                screenMax: 96, // 96rem === 1536px
                unit: 'rem', // default is rem but it's also possible to use 'px'
                prefix: '', // set a prefix to use it alongside the default font sizes
            },
            values: {
                //  <prefix>: [<multiplyer>, <line-height>]
                xs: [-2, 1.6],
                sm: [-1, 1.4],
                base: [0, 1.6],
                lg: [1, 1.6],
                xl: [2, 1.4],
                '2xl': [3, 1.3],
                '3xl': [4, 1.3],
                '4xl': [5, 1.1],
                '5xl': [6, 1.1],
                '6xl': [7, 1.1],
                '7xl': [8, 1.3],
                '8xl': [9, 1],
                '9xl': [10, 1],
                title: [7, 1.15],
            },
        },
        extend: {
            fontFamily: {
                // extend font-family here
                mono: [
                    'Consolas',
                    'Andale Mono WT',
                    'Andale Mono',
                    'Lucida Console',
                    'Lucida Sans Typewriter',
                    'DejaVu Sans Mono',
                    'Bitstream Vera Sans Mono',
                    'Liberation Mono',
                    'Nimbus Mono L',
                    'Monaco',
                    'Courier New',
                    'Courier',
                    'monospace',
                ],
            },
            opacity: {
                '01': '.01',
                '015': '.015',
                '02': '.02',
                '025': '.025',
                '03': '.03',
                '035': '.035',
                '04': '.04',
                '045': '.045',
                '055': '.055',
                '06': '.06',
                '065': '.065',
                '07': '.07',
                '075': '.075',
                '08': '.08',
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
            textColor: ['active'],
            borderWidth: ['first', 'last'],
            borderRadius: ['first', 'last'],
            hidden: ['first', 'last', 'hover'],
        },
    },
    corePlugins: {
        fontSize: false,
    },
    plugins: [
        require('tailwindcss-fluid-type'),
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    width: '100%',
                    maxWidth: '100%',
                    padding: '0 1rem 0 1rem',
                    margin: '0 auto',
                    '@screen sm': { maxWidth: '640px' },
                    '@screen md': { maxWidth: '720px' },
                    '@screen lg': { maxWidth: '1000px' },
                },
                '.b-hidden *': { border: 'none !important' },
                '.b-red': { border: '1px solid #dc2626' },
                '.b-blue': { border: '1px solid #0284c7' },
                '.b-green': { border: '1px solid #059669' },
                '.b-yellow': { border: '1px solid #d97706' },
                '.no-scroll': { overflow: 'hidden' },
            });
        },
    ],
};

module.exports = config;
