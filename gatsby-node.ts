export const onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
  // Nothing
}

export const onCreateBabelConfig = ({ actions }) => {
  // https://github.com/gatsbyjs/gatsby/issues/27694#issuecomment-717790188
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  })
}
