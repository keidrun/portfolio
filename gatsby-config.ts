import path from 'path'

const plugins: (string | object)[] = [
  'gatsby-plugin-sass',
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-eslint',
    options: {
      rulePaths: [path.join(process.cwd(), 'node_modules', 'gatsby', 'dist', 'utils', 'eslint-rules')],
      stages: ['develop'],
      extensions: ['ts', 'tsx'],
      exclude: ['node_modules', '.cache', 'public', '.husky', '.vscode'],
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
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "Keid's Portfolio",
      short_name: "Keid's Portfolio",
      start_url: '/',
      background_color: '#3bc6ce',
      theme_color: '#3bc6ce',
      display: 'standalone',
      icons: [],
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

export default {
  siteMetadata: {
    title: "Keid's Portfolio",
    siteUrl: 'https://keisukesasaki.com',
    description: "Keid's Portfolio",
  },
  plugins,
}