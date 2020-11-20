module.exports = {
  siteMetadata: {
    title: `2WW Decision Support`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    {
      resolve: `gatsby-plugin-less`,
      options: {
        modifyVars: {
          'primary-color': '#234544',
          'link-color': '#1DA57A',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/components`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/cr/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/cr/components`,
      },
    },
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/cr/components/common`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/cr`,
      },
    },
    
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    'gatsby-transformer-yaml',
    `gatsby-plugin-sharp`,
  //   {
  //   resolve: `gatsby-source-strapi`,
  //   options: {
  //     apiURL: `http://localhost:1337`,
  //     queryLimit: 1000, // Default to 100
  //     contentTypes: [`field`, `enum`, `symptom`],
  //     // Possibility to login with a strapi user, when content types are not publically available (optional).
  //     loginData: {
  //       identifier: "",
  //       password: "",
  //     },
  //   },
  // },

    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // 'gatsby-plugin-advanced-sitemap',
    // {
    //   resolve: "gatsby-plugin-purgecss",
    //   options: {
    //     // printRejected: true, // Print removed selectors and processed file names
    //     // develop: true, // Enable while using `gatsby develop`
    //     // tailwind: true, // Enable tailwindcss support
    //     // whitelist: ['whitelist'], // Don't remove this selector
    //     // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
    //     // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
    //   },
    // },
  ],
}
