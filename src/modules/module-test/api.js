import axios from 'axios';
import commonApi from '@/api';

const api = {
	getFiles: () => {
		return axios.get('files/condition', {
			params: {
				name: 'apitest',
			},
		});
	},
};

export default {
	...commonApi,
	...api,
};
