module.exports = {
   pathPrefix: '/gtkemu8086-docs',
  siteMetadata: {
    siteTitle: `emu8086 Docs`,
    defaultTitle: `emu8086 Docs`,
    siteTitleShort: `Rocket Docs`,
    siteDescription: `An 8086 emulator`,
    siteUrl: `https://kosiken.github.io/gtkemu8086-docs`,
    siteAuthor: `Allison Kosy`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#8575AA`,
    basePath: `/`,
    
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/kosiken/gtkemu8086-docs`,

      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
