module.exports = {
    resolve: {
      fallback: {
        fs: false,
        path: require.resolve("path-browserify")
      }
    }
  };
  