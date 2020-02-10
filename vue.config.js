module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/sass/_colors.scss";`
        }
      }
    }
  };