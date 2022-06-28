import type { GatsbyConfig } from 'gatsby'
import path from 'path'

const plugins: (string | object)[] = [
  'gatsby-plugin-sass',
  {
    resolve: 'gatsby-plugin-eslint',
    options: {
      rulePaths: [path.join(process.cwd(), 'node_modules', 'gatsby', 'dist', 'utils', 'eslint-rules')],
      stages: ['develop'],
      extensions: ['ts', 'tsx'],
      exclude: ['node_modules', '.cache', 'public', '.husky', '.vscode'],
    },
  },
  'gatsby-plugin-image',
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/images/`,
    },
  },
  'gatsby-plugin-graphql-codegen',
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "Keid's Portfolio",
      short_name: "Keid's Portfolio",
      start_url: '/',
      background_color: '#3bc6ce',
      theme_color: '#3bc6ce',
      display: 'standalone',
      icon: 'src/images/favicon.png',
    },
  },
]

if (process.env.NODE_ENV === 'production') {
  plugins.unshift({
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: 'UA-47218093-3',
      head: true,
    },
  })
  plugins.unshift({
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://keisukesasaki.com',
      policy: [{ userAgent: '*', disallow: '/' }], // private
    },
  })
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Keid's Portfolio",
    description: "Keid's Portfolio",
    siteUrl: 'https://keisukesasaki.com',
  },
  plugins,
}

export default config
