import http from '@/utils/http';

const userApi = {
	fetchUserInfo: () => {
		return http.get('/user');
	},
};

export default userApi;
