import axios from 'axios';

const userApi = {
	fetchUserInfo: () => {
		return axios.get('/user');
	},
	fileSearch: () => {
		return axios.post('files/search', {
			params: {
				keywords: 'search',
			},
		});
	},
};

export default userApi;
