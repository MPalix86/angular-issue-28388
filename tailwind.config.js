const path = require('path');
const process = require('process');
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const generatePalette = require(path.resolve(__dirname, ('src/@fuse/tailwind/utils/generate-palette')));

/**
 * Custom palettes
 *
 * Uses the generatePalette helper method to generate
 * Tailwind-like color palettes automatically
 */
const customPalettes = {
    brand: generatePalette('#2196F3'),
    mermec: generatePalette('#DD0000'),
    dark: generatePalette('#100c2a')
};

/**
 * Themes
 */
const themes = {
    // Default theme is required for theming system to work correctly
    'default': {
        primary: customPalettes.mermec,
        accent: {
            ...colors.slate,
            DEFAULT: colors.slate[800]
        },
        warn: {
            ...colors.red,
            DEFAULT: colors.red[600]
        },
        'on-warn': {
            500: colors.red['50']
        }
    },
    // Rest of the themes will use the 'default' as the base theme
    // and extend them with their given configuration
    'mermec': {
        primary: customPalettes.mermec
    },
    'brand': {
        primary: customPalettes.brand
    },
    'dark': {
        primary: customPalettes.dark
    },
    'indigo': {
        primary: {
            ...colors.teal,
            DEFAULT: colors.teal[600]
        }
    },
    'rose': {
        primary: colors.rose
    },
    'purple': {
        primary: {
            ...colors.purple,
            DEFAULT: colors.purple[600]
        }
    },
    'amber': {
        primary: colors.amber
    },
    'green': {
        primary: colors.emerald
    }
};

/**
 * Tailwind configuration
 *
 * @param isProd
 * This will be automatically supplied by the custom Angular builder
 * based on the current environment of the application (prod, dev etc.)
 */
const config = {
    experimental: {},
    future: {},
    important: true,
    content: ['./src/**/*.{html,ts}','./projects/**/*.{html,ts}'],
    darkMode: 'class',
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            pink: colors.pink,
            gray: colors.slate,
            red: colors.red,
            orange: colors.orange,
            amber: colors.amber,
            yellow: colors.yellow,
            green: colors.green,
            teal: colors.teal,
            blue: colors.blue,
            indigo: colors.indigo,
            purple: colors.purple,
            mermec: {
                '50': '#fbe0e0',
                '100': '#f5b3b3',
                '200': '#ee8080',
                '300': '#e74d4d',
                '400': '#e22626',
                '500': '#dd0000',
                '600': '#d90000',
                '700': '#d40000',
                '800': '#cf0000',
                '900': '#c70000',
                'A100': '#ffefef',
                'A200': '#ffbcbc',
                'A400': '#ff8989',
                'A700': '#ff6f6f'
            },
            dark: {
                dock: {
                    50: '#C5BFED',
                    100: '#A9A0E4',
                    200: '#8C80DB',
                    300: '#6F60D2',
                    400: '#5240C9',
                    500: '#4231AF',
                    600: '#36288F',
                    700: '#2A1F6F',
                    800: '#1E1650',
                    900: '#100C2A'
                },
                gray: {
                    50: '#DDDEE3',
                    100: '#C7C8D1',
                    200: '#B0B2BF',
                    300: '#9A9CAC',
                    400: '#7a7c93',
                    500: '#6E7087',
                    600: '#5C5E70',
                    700: '#494B5A',
                    800: '#373843',
                    900: '#25252D'
                }
            },
            defect: {
                status: {
                    watched: {
                        0: '#ffffff',
                        1: '#ffffff'
                    },
                    unwatched: {
                        0: '#d6d6d6',
                        1: '#888888'
                    },
                    positive: {
                        0: '#e4ffda',
                        1: '#3da004'
                    },
                    negative: {
                        0: '#ffd3d3',
                        1: '#ff4d4d'
                    },
                    none: {
                        0: '#ffffff',
                        1: '#ffffff'
                    },
                    sent: {
                        0: '#ffee8b',
                        1: '#ffdf2c'
                    }
                },
                type: {
                    ial: {
                        0: '#ff7a71',
                        1: '#ff1100'
                    },
                    il: {
                        0: '#ffae62',
                        1: '#ff7b00'
                    },
                    al: {
                        0: '#ffe15a',
                        1: '#fdcf00'
                    }
                },
                selected: '#28a8ea'
            }
        },
        fontSize: {
            'xs': '0.625rem',
            'sm': '0.75rem',
            'md': '0.8125rem',
            'base': '0.875rem',
            'lg': '1rem',
            'xl': '1.125rem',
            '2xl': '1.25rem',
            '3xl': '1.5rem',
            '4xl': '2rem',
            '5xl': '2.25rem',
            '6xl': '2.5rem',
            '7xl': '3rem',
            '8xl': '4rem',
            '9xl': '6rem',
            '10xl': '8rem'
        },
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        boxShadow: {
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            '3xl': '0 2px 3px 0px rgba(0, 0, 0, 0.5)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            none: 'none',
        },
        extend: {
            animation: {
                'spin-slow': 'spin 3s linear infinite'
            },
            flex: {
                '0': '0 0 auto'
            },
            fontFamily: {
                sans: `"Inter var", ${defaultTheme.fontFamily.sans.join(',')}`,
                mono: `"IBM Plex Mono", ${defaultTheme.fontFamily.mono.join(',')}`
            },
            opacity: {
                12: '0.12',
                38: '0.38',
                87: '0.87'
            },
            rotate: {
                '-270': '270deg',
                '15': '15deg',
                '30': '30deg',
                '60': '60deg',
                '270': '270deg'
            },
            scale: {
                '-1': '-1'
            },
            colors: {
                green: colors.emerald,
                yellow: colors.amber,
                purple: colors.violet,
            },
            zIndex: {
                '-1': -1,
                '1': 1,
                '2': 2,
                '3': 3,
                '4': 4,
                '5': 5,
                '49': 49,
                '60': 60,
                '70': 70,
                '80': 80,
                '90': 90,
                '99': 99,
                '999': 999,
                '1000': 1000,
                '9999': 9999,
                '99999': 99999
            },
            spacing: {
                '0': '0px',
                'px': '1px',
                '0.5': '0.125rem',
                '1': '0.25rem',
                '1.5': '0.375rem',
                '2': '0.5rem',
                '2.5': '0.625rem',
                '3': '0.75rem',
                '3.5': '0.875rem',
                '4': '1rem',
                '4.5': '1.125rem',
                '5': '1.25rem',
                '5.5': '1.375rem',
                '6': '1.5rem',
                '6.5': '1.625rem',
                '7': '1.75rem',
                '7.5': '1.875rem',
                '8': '2rem',
                '9': '2.25rem',
                '10': '2.5rem',
                '11': '2.75rem',
                '12': '3rem',
                '13': '3.25rem',
                '14': '3.5rem',
                '15': '3.75rem',
                '16': '4rem',
                '18': '4.5rem',
                '20': '5rem',
                '22': '5.5rem',
                '24': '6rem',
                '26': '6.5rem',
                '28': '7rem',
                '30': '7.5rem',
                '32': '8rem',
                '36': '9rem',
                '40': '10rem',
                '44': '11rem',
                '48': '12rem',
                '50': '12.5rem',
                '52': '13rem',
                '56': '14rem',
                '60': '15rem',
                '64': '16rem',
                '72': '18rem',
                '80': '20rem',
                '90': '22.5rem',
                '96': '24rem',
                '120': '30rem'
            },
            /**
             * Extended spacing values for width and height utilities.
             * This way, we won't be adding these to other utilities
             * that use 'spacing' config to keep the file size
             * smaller by not generating useless utilities such as
             * p-1/4 or m-480.
             */
            extendedSpacing: {
                // Fractional values
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '2/6': '33.333333%',
                '3/6': '50%',
                '4/6': '66.666667%',
                '5/6': '83.333333%',
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%',

                // Bigger values
                '100': '25rem',
                '120': '30rem',
                '128': '32rem',
                '140': '35rem',
                '160': '40rem',
                '180': '45rem',
                '192': '48rem',
                '200': '50rem',
                '240': '60rem',
                '256': '64rem',
                '280': '70rem',
                '320': '80rem',
                '360': '90rem',
                '400': '100rem',
                '480': '120rem',

                // Viewport values
                '5vh': '5vh',
                '10vh': '10vh',
                '15vh': '15vh',
                '20vh': '20vh',
                '25vh': '25vh',
                '30vh': '30vh',
                '35vh': '35vh',
                '40vh': '40vh',
                '45vh': '45vh',
                '50vh': '50vh',
                '55vh': '55vh',
                '60vh': '60vh',
                '65vh': '65vh',
                '70vh': '70vh',
                '75vh': '75vh',
                '78vh': '78vh',
                '80vh': '80vh',
                '84vh': '84vh',
                '90vh': '90vh',
                '95vh': '95vh',
                '100vh': '100vh',

                '5vw': '5vw',
                '10vw': '10vw',
                '20vw': '20vw',
                '30vw': '30vw',
                '40vw': '40vw',
                '50vw': '50vw',
                '60vw': '60vw',
                '70vw': '70vw',
                '80vw': '80vw',
                '90vw': '90vw',
                '95vw': '95vw',
                '100vw': '100vw'
            },
            defaultSpacing: {
                normal: 'normal',
                inherit: 'inherit',
                initial: 'initial',
                unset: 'unset'
            },
            fitSpacing: {
                auto: 'auto',
                fit: 'fit-content',
                max: 'max-content',
                min: 'min-content',
                none: 'none'
            },
            height: theme => ({
                ...theme('extendedSpacing'),
                ...theme('fitSpacing'),
                ...theme('defaultSpacing')
            }),
            minHeight: theme => ({
                ...theme('spacing'),
                ...theme('extendedSpacing'),
                ...theme('fitSpacing'),
                ...theme('defaultSpacing')
            }),
            maxHeight: theme => ({
                ...theme('extendedSpacing'),
                ...theme('fitSpacing'),
                ...theme('defaultSpacing')
            }),
            width: theme => ({
                ...theme('extendedSpacing'),
                ...theme('fitSpacing'),
                ...theme('defaultSpacing')
            }),
            minWidth: theme => ({
                ...theme('spacing'),
                ...theme('extendedSpacing'),
                ...theme('fitSpacing'),
                ...theme('defaultSpacing')
            }),
            maxWidth: theme => ({
                ...theme('spacing'),
                ...theme('extendedSpacing'),
                ...theme('fitSpacing'),
                ...theme('defaultSpacing')
            }),
            lineHeight: theme => ({
                ...theme('spacing'),
                ...theme('extendedSpacing'),
                ...theme('defaultSpacing')
            }),
            dropShadow: theme => ({
                'sm': '3px 3px 2px rgba(0, 0, 0, 0.5)',
            }),
            // @tailwindcss/typography
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: 'var(--fuse-text-default)',
                        '[class~="lead"]': {
                            color: 'var(--fuse-text-secondary)'
                        },
                        a: {
                            color: 'var(--fuse-primary-500)'
                        },
                        strong: {
                            color: 'var(--fuse-text-default)'
                        },
                        'ol > li::before': {
                            color: 'var(--fuse-text-secondary)'
                        },
                        'ul > li::before': {
                            backgroundColor: 'var(--fuse-text-hint)'
                        },
                        hr: {
                            borderColor: 'var(--fuse-border)'
                        },
                        blockquote: {
                            color: 'var(--fuse-text-default)',
                            borderLeftColor: 'var(--fuse-border)'
                        },
                        h1: {
                            color: 'var(--fuse-text-default)'
                        },
                        h2: {
                            color: 'var(--fuse-text-default)'
                        },
                        h3: {
                            color: 'var(--fuse-text-default)'
                        },
                        h4: {
                            color: 'var(--fuse-text-default)'
                        },
                        'figure figcaption': {
                            color: 'var(--fuse-text-secondary)'
                        },
                        code: {
                            color: 'var(--fuse-text-default)',
                            fontWeight: '500'
                        },
                        'a code': {
                            color: 'var(--fuse-primary)'
                        },
                        pre: {
                            color: theme('colors.white'),
                            backgroundColor: theme('colors.gray.800')
                        },
                        thead: {
                            color: 'var(--fuse-text-default)',
                            borderBottomColor: 'var(--fuse-border)'
                        },
                        'tbody tr': {
                            borderBottomColor: 'var(--fuse-border)'
                        }
                    }
                },
                sm: {
                    css: {
                        code: {
                            fontSize: '1em'
                        },
                        pre: {
                            fontSize: '1em'
                        },
                        table: {
                            fontSize: '1em'
                        }
                    }
                }
            })
        }
    },
    corePlugins: {
        appearance: false,
        gradientColorStops: false,
        container: false,
        float: false,
        clear: false,
        placeholderColor: false,
        placeholderOpacity: false,
        verticalAlign: false,
        visibility: true,
        flex: true,
        preflight: true

    },
    plugins:[

        // Fuse - Tailwind plugins
        require(path.resolve(__dirname, ('src/@fuse/tailwind/plugins/utilities'))),
        require(path.resolve(__dirname, ('src/@fuse/tailwind/plugins/icon-size'))),
        require(path.resolve(__dirname, ('src/@fuse/tailwind/plugins/theming')))({ themes }),

        // Other third party and/or custom plugins
        require('@tailwindcss/typography')({ modifiers: ['sm', 'lg'] }),
        //require('@tailwindcss/line-clamp')
    ]
};

module.exports = config;
