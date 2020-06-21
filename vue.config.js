const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {},
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('autoprefixer'),
          cssnano({ preset: 'default' }),
          purgecss({
            content: ['./src/**/*.vue', './src/**/*.js'],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          }),
        ],
      },
      less: {},
      sass: {},
    },
  },
};
