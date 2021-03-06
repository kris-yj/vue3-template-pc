const path = require('path');
const resolve = function (dir) {
	return path.join(__dirname, dir);
};

module.exports = {
	publicPath: process.env.VUE_APP_BASE_URL? process.env.VUE_APP_BASE_URL : '',
	outputDir: 'dist',
	assetsDir: 'static',
	// lintOnSave: true, // 是否开启eslint保存检测
	productionSourceMap: false, // 是否在构建生产包时生成SourceMap
	chainWebpack: (config) => {
		config.resolve.alias.set('@', resolve('src'));
		config.resolve.alias.set('vue-i18n', 'vue-i18n/dist/vue-i18n.cjs.js');
		// config.optimization.runtimeChunk('single');
	},
	devServer: {
		port: '6001',
		hot: true,
		proxy: {
			'/pitchbook/api': {
				target: process.env.VUE_APP_SERVER_URL,
				// changeOrigin: true,
				secure: false,
				pathRewrite: {
					'^/pitchbook/api': '/',
				},
			},
		},
		// disableHostCheck: true, // 是否开启host校验，默认false
	},
};
