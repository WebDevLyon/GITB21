module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/sass/_global.scss";`
      }
    }
  }
};