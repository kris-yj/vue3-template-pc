import axios from 'axios';
import store from '@/store';
import { ElNotification } from 'element-plus';

// 设置默认baseURL
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

/**
 * 请求拦截器，模拟给每个请求添加header数据
 */
axios.interceptors.request.use(
	(config) => {
		const token = store.getters.token;
		if (token) {
			config.headers.Authorization = token;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

/**
 * 响应拦截器，统一处理返回数据
 */
axios.interceptors.response.use(
	(response) => response.data,
	(error) => {
		let headers = {};
		if (error && error.response && error.response.headers) {
			headers = error.response.headers;
		}
		/**
		 * 对于特殊请求，拦截器直接放行
		 */
		if (
			headers != null &&
			headers['x-not-allow-show-error-message'] &&
			headers['x-not-allow-show-error-message'].indexOf('true') !== -1
		) {
			return Promise.reject(error);
		}

		let status = null;
		if (error.response) {
			status = error.response.status;
		}
		let message = '请求失败，请稍后再试。';

		switch (status) {
			case 401:
				location.reload();
				break;
			case 403:
				message = '没有权限访问该服务！';
				break;
			case 404:
				message = '资源未找到！';
				break;
			case 500:
				message = '服务端异常，请稍后再试。';
				break;
			default:
				message = '未知错误。';
		}
		ElNotification.error({
			title: '错误',
			message: message,
			offset: 60,
		});
		/**
		 * 返回接口返回的错误信息
		 * */
		return Promise.reject(error);
	}
);
