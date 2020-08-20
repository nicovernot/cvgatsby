module.exports = {
  
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyR8YRU3rWxqIsyK`, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: `app6feg4WgnosCylh`,
            tableName: `cv`,
            tableView: `Grid view`, // optional
            mapping: { competances: 'text/markdown' },
            tableLinks: [`projets`,'cat'],
            },
            {
          baseId: `app6feg4WgnosCylh`,
          tableName: `projets`,
          tableView: `Grid view` ,// optional
          mapping: { description: 'text/markdown' },
          // can leave off queryName, mapping or tableLinks if not needed
        }
        ]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
              {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    `gatsby-plugin-emotion`,
    'gatsby-plugin-transition-link',
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/blog`,
        prismPreset: `dracula`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Cv Nicolas Vernot`,
    author: `Nicolas Vernot`,
    description: `My site description...`,
    siteUrl:"http://localhost:8000/",
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
}
