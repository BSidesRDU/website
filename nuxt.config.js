// update the year in the license, too
const year = '2022';
const bsidesDate = `${year}-10-15T08:00:00`;
const eventZillaLink = 'https://events.eventzilla.net/e/bsidesrdu-2022-hacktoberfest-2138578662';

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'BSidesRDU',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Security BSides is a community-driven framework for building events for and by cyber security community members. The goal is to expand the spectrum of conversation beyond the traditional confines of space and time. It creates opportunities for individuals to both present and participate in an intimate atmosphere that encourages collaboration. It is an intense event with discussions, demos, and interaction from participants. It is where conversations for the next-big-thing are happening. Security is top of mind across the entire sphere of IT and the world beyond. Therefore, more people and organizations are interested in the next new thing in security. BSides is the place where these people come to collaborate, learn and share. With many tech-companies, colleges and universities in Raleigh, Durham, Chapel Hill and surrounding areas, it is also an international center of innovation in the security industry. Security B-Sides Raleigh-Durham (B-Sides RDU) is proud to have had great speaker lineups at our events including keynotes by Dan Kaminsky, Dave Kennedy, Paul Vixie, BenTen, Jay Beale, G.Mark Hardy, and for B-Sides RDU 2017: Cliff Stoll.',
            },
            { name: 'format-detection', content: 'telephone=no' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1, minimum-scale=1',
            },
            { name: 'msapplication-TileColor', content: '#ffffff' },
            { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
            { name: 'theme-color', content: '#ff0000' },
            { property: 'og:url', content: 'https://bsidesrdu.org' },
            { property: 'og:type', content: 'website' },
            { property: 'og:title', content: 'BSidesRDU' },
            {
                property: 'og:description',
                content:
                    'Security BSides is a community-driven framework for building events for and by cyber security community members. The goal is to expand the spectrum of conversation beyond the traditional confines of space and time. It creates opportunities for individuals to both present and participate in an intimate atmosphere that encourages collaboration. It is an intense event with discussions, demos, and interaction from participants. It is where conversations for the next-big-thing are happening.',
            },
            {
                property: 'og:image',
                content: `https://bsidesrdu.org/img/bsides-${year}-logo-og.png`,
            },
            {
                property: 'og:image:secure_url',
                content: `https://bsidesrdu.org/img/bsides-${year}-logo-og.png`,
            },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'apple-touch-icon',
                sizes: '57x57',
                href: '/apple-icon-57x57.png',
            },
            {
                rel: 'apple-touch-icon',
                sizes: '60x60',
                href: '/apple-icon-60x60.png',
            },
            {
                rel: 'apple-touch-icon',
                sizes: '72x72',
                href: '/apple-icon-72x72.png',
            },
            {
                rel: 'apple-touch-icon',
                sizes: '76x76',
                href: '/apple-icon-76x76.png',
            },
            {
                rel: 'apple-touch-icon',
                sizes: '114x114',
                href: '/apple-icon-114x114.png',
            },
            {
                rel: 'apple-touch-icon',
                sizes: '120x120',
                href: '/apple-icon-120x120.png',
            },
            {
                rel: 'apple-touch-icon',
                sizes: '144x144',
                href: '/apple-icon-144x144.png',
            },
            {
                rel: 'apple-touch-icon',
                sizes: '152x152',
                href: '/apple-icon-152x152.png',
            },
            {
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href: '/apple-icon-180x180.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '192x192',
                href: '/android-icon-192x192.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: '/favicon-32x32.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '96x96',
                href: '/favicon-96x96.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: '/favicon-16x16.png',
            },
            { rel: 'manifest', href: '/manifest.json' },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/scss/main.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/fragment.js', '~/plugins/camel-cased.js', '~/plugins/b-date.js'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ['@nuxtjs/style-resources'],

    styleResources: {
        scss: ['~/assets/scss/abstracts/_variables.scss'],
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
    ],

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {
        liveEdit: false,
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    server: {
        host: '0.0.0.0',
        port: 3004,
    },

    publicRuntimeConfig: {
        bsidesDate,
        eventZillaLink,
    },
};
