import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'HLL Gun Calc',
    favicon: 'images/logo.png',
    url: 'https://hll-gun-calc.app-document.cabbagelol.net',
    baseUrl: '/',

    organizationName: 'facebook',
    projectName: 'docusaurus',

    onBrokenLinks: 'ignore',
    onBrokenMarkdownLinks: 'ignore',

    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
            rel: "stylesheet",
            crossOrigin: "anonymous"
        }, {
            href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css'
        }
    ],

    scripts: [
        {
            src: '/script/baidu.js'
        },
        {
            src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js',
            crossOrigin: "anonymous"
        },
        {
            src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"',
            crossOrigin: "anonymous"
        },
        {
            src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
            crossOrigin: "anonymous"
        }
    ],

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: 'images/logo.png',
        colorMode: {
            defaultMode: 'light',
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },
        navbar: {
            title: 'HLLGunCalc',
            hideOnScroll: true,
            logo: {
                alt: 'logo',
                src: 'images/logo.png',
                className: 'rounded-1'
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: '文档',
                },
                {
                    href: '/about',
                    label: '关于',
                    position: 'right',
                },
                {
                    position: 'right',
                    items: [
                        {
                            href: '/docs/privacy',
                            label: '隐私条款',
                        },
                        {
                            href: '/docs/version',
                            label: '版本',
                        },
                        {
                            href: 'https://github.com/hll-gun-calculator',
                            label: 'Github仓库',
                        },
                        {
                            href: 'https://github.com/hll-gun-calculator/hll-gun-calculato-app/issues',
                            label: '在Github issues寻求帮助',
                        },
                    ]
                }
            ],
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
