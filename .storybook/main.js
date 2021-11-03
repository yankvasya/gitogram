const path = require('path')

module.exports = {
  "stories": [
    "../src/**/*.stories.js"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y"
  ],
  webpackFinal: config => {

    return {
      ...config,
      module: {
        rules: [
          {
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader'],
          include: path.resolve(__dirname, '../')
          }
        ]
      }
    }
  }
}
