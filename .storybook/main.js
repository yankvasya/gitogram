const path = require('path')

module.exports = {
  "stories": [
    "../src/**/*.stories.js"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
    "@storybook/addon-backgrounds",
    "@storybook/addon-knobs",
    {
      name: "@storybook/addon-storysource",
      options: {
        rule: {
          test: [/\.stories\.jsx?$/],
          include: [path.resolve(__dirname, '../src/components')],
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
  ],
  webpackFinal: async (config, { configType }) => {
    configType = 'DEVELOPMENT'

    config.module.rules.push(
      {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
      },
      {
        test: [/\.stories\.jsx?$/],
        loaders: [
          {
            loader: require.resolve('@storybook/source-loader')
          }
        ]
      }
      );

    return config;
  }
}
