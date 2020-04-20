let siteConfig
let ghostConfig

try {
    siteConfig = require(`./siteConfig`)
} catch (e) {
    siteConfig = null
}

try {
    ghostConfig = require(`./.ghost`)
} catch (e) {
    ghostConfig = {
        development: {
            apiUrl: process.env.GHOST_API_URL,
            contentApiKey: process.env.GHOST_CONTENT_API_KEY,
        },
        production: {
            apiUrl: process.env.GHOST_API_URL,
            contentApiKey: process.env.GHOST_CONTENT_API_KEY,
        },
    }
} finally {
    const { apiUrl, contentApiKey } = process.env.NODE_ENV === `development` ? ghostConfig.development : ghostConfig.production

    if (!apiUrl || !contentApiKey || contentApiKey.match(/<key>/)) {
        ghostConfig = null //allow default config to take over
    }
}

module.exports = {
  //pathPrefix: `/mygatsby`,
  siteMetadata: {
    title: 'TranslateJPN',
    author: 'Daniel Clough',
    description: 'Japanese English Translation based out of Las Vegas.',
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Services',
        link: '/',
        items: [
          {
            name: 'Translation',
            link: '/',
          },
          {
            name: 'Interpretation',
            link: '/',
          },
          {
            name: 'Personal Assistance',
            link: '#',
          },
          {
            name: 'Trasncription',
            link: '#',
          },
          {
            name: 'Narration',
            link: '/',
          },
        ],
      },
      {
        name: 'About Us',
        link: '/',
      },
      {
        name: 'FAQ',
        link: '/',
      },
      {
        name: 'Contact',
        link: '#',
        cl: 'button primary',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'TranslateJPN',
        short_name: 'TranslateJPN',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    'gatsby-plugin-offline',
    { 
      resolve: `gatsby-theme-try-ghost`,
      options: {
            ghostConfig: ghostConfig,
            siteConfig: siteConfig,
          },
    },
            {
            resolve: `gatsby-theme-ghost-dark-mode`,
            options: {
                // Set to true if you want your theme to default to dark mode (default: false)
                // Note that this setting has an effect only, if
                //    1. The user has not changed the dark mode
                //    2. Dark mode is not reported from OS
                defaultModeDark: false,
                // If you want the defaultModeDark setting to take precedence
                // over the mode reported from OS, set this to true (default: false)
                overrideOS: false,
            },
        },
        {
            resolve: `gatsby-transformer-rehype`,
            options: {
                filter: node => (
                    node.internal.type === `GhostPost` ||
                    node.internal.type === `GhostPage`
                ) && node.slug !== `data-schema`,
                plugins: [
                    {
                        resolve: `gatsby-rehype-ghost-links`,
                    },
                    {
                        resolve: `gatsby-rehype-prismjs`,
                    },
                ],
            },
        },
  ],
}