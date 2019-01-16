// const cssCustomProperties = require('postcss-custom-properties');
// const cssImport = require('postcss-import');
// const autoprefixer = require('autoprefixer');

module.exports = {
	devServer: {
		disableHostCheck: true
	},
	css: {
		extract: false,
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
        // importLoaders: 1
      },
      postcss: {
      	// plugins: () => {
	      //   return [
	      //     cssImport(),
	      //     cssCustomProperties({ preserve: true }),
	      //     autoprefixer()
	      //   ];
	      // }
				// parser: 'sugarss',
			  plugins: {
			    'postcss-import': {},
			    'postcss-custom-properties': {
			    	preserve: true
			    },
			    'postcss-calc': {},
			    'autoprefixer': {}
			    // 'postcss-preset-env': {},
			    // 'cssnano': {}
			  }
      }
    }
  }
}
