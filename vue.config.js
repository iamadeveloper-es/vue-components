const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `
              @import "@/static/scss/main.scss";
            `,
        },
      },
    }
  };