const plugins = ['gatsby-plugin-flow', 'gatsby-plugin-react-helmet']
if (process.env.NODE_ENV === 'production') {
  plugins.unshift('gatsby-plugin-sass')
  plugins.unshift({
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: 'UA-47218093-3',
      head: true,
    },
  })
  plugins.unshift({
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "Keid's Portfolio",
      short_name: "Keid's Portfolio",
      start_url: '/',
      background_color: '#3bc6ce',
      theme_color: '#3bc6ce',
      display: 'standalone',
    },
  })
  plugins.unshift({
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://keisukesasaki.com',
      policy: [{ userAgent: '*', disallow: '/' }],
    },
  })
}

module.exports = {
  siteMetadata: {
    title: "Keid's Portfolio",
    siteUrl: 'https://keisukesasaki.com',
    description: "Keid's Portfolio",
  },
  plugins,
}
