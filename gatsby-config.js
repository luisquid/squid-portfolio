module.exports = {
  siteMetadata: {
    title: `Squid's Portfolio`,
    author: `Luis Bazan`,
    description: `Kick`,
    email: `luisquid.dev@gmail.com`,
    twitter: `https://twitter.com/luisquid`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options:{
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      } 
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-sharp`,
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options : {
        plugins: [
          {
            resolve:'gatsby-remark-relative-images',
          },
          {
          resolve: `gatsby-remark-images`,
          options:{
            maxWidth: 750,
            linkImagesToOriginal: false
          }
          },
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
