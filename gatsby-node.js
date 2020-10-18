exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
  if (stage === 'develop' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.scss$/,
            exclude: /\.module\.scss$/,
            use: [
              loaders.miniCssExtract(),
              loaders.css({
                importLoaders: 3,
              }),
              loaders.postcss(),
              'sass-loader',
            ],
          },
          {
            test: /\.module\.scss$/,
            use: [
              loaders.miniCssExtract(),
              loaders.css({
                sourceMap: false,
                modules: true,
                importLoaders: 3,
              }),
              loaders.postcss(),
              'sass-loader',
            ],
          },
        ],
      },
    })
  }
}
