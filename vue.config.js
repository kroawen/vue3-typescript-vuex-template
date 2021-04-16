module.exports = {
	configureWebpack: {
		plugins: []
	},
	lintOnSave: false,
	publicPath: '/',

	devServer: {
		allowedHosts: ['localhost'],
		port: 8055,
		public: '127.0.0.1:8055',
		proxy: {
			'/': {
				target: process.env.API_URL ? process.env.API_URL : 'http://localhost:8055/',
				changeOrigin: true,
				bypass: req => (req.url.startsWith('/') ? req.url : null)
			}
		},
		progress: false
	},

	// There are so many chunks (from all the interfaces / layouts) that we need to make sure to not
	// prefetch them all. Prefetching them all will cause the server to apply rate limits in most cases
	chainWebpack: config => {
		config.plugins.delete('prefetch');

		if (process.env.NODE_ENV === 'development') {
			config.output.filename('[name].[hash].js').end();
		}
	},

	productionSourceMap: false,

	css: {
		loaderOptions: {
			postcss: {
				plugins: [require('autoprefixer')()]
			}
		}
	}
};