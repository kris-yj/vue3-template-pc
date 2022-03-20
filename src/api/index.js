const apiFilesMap = require.context('.', false, /\.js$/);

const commonApi = {};

apiFilesMap.keys().forEach((key) => {
	if (key === './index.js') return;
	Object.assign(commonApi, apiFilesMap(key).default);
});

export default commonApi;
