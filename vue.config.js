module.exports = {
	devServer: {
		disableHostCheck: true
	},
	css: {
		extract: true,
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
        // importLoaders: 1
        // modules: true
      },
    }
  }
}
