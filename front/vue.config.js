module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/production-sub-path/" : "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/sass/_global.scss";`,
      },
    },
  },
};
