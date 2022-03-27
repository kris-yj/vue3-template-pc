const conmmonApiFilesMap = require.context('.', false, /\.js$/);

const commonApi = {};

conmmonApiFilesMap.keys().forEach((key) => {
	if (key === './index.js') return;
	Object.assign(commonApi, conmmonApiFilesMap(key).default);
});

const api = {};

export default {
	...api,
	...commonApi,
};
