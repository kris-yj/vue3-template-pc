const path = require('path');
const resolve = function (dir) {
	return path.join(__dirname, dir);
};

module.exports = {
	publicPath:
		process.env.NODE_ENV === 'production'
			? process.env.VUE_APP_BASE_URL
			: '/',
	assetsDir: 'static',
	lintOnSave: true, // 是否开启eslint保存检测
	productionSourceMap: false, // 是否在构建生产包时生成SourceMap
	chainWebpack: (config) => {
		config.resolve.alias.set('@', resolve('src'));
		config.optimization.runtimeChunk('single');
	},
	devServer: {
		port: '6001',
		// hot: true,
		// overlay: {
		// 	warning: false,
		// 	error: true,
		// },
		// proxy: {
		// 	'/api': {
		// 		target: process.env.VUE_APP_SERVER_URL,
		// 		changeOrigin: true,
		// 		secure: false,
		// 		pathRewrite: {
		// 			'^/api': '/api',
		// 		},
		// 	},
		// },
		// disableHostCheck: true, // 是否开启host校验，默认false
	},
};
