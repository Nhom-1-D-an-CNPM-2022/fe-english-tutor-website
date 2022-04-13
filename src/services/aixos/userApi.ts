import axiosMy from './axiosMy';

const userApi = {
  getInfo: async (params: any) => {
    const url = `users/info`;
    return await axiosMy.get(url, { params });
  },
};

export default userApi;
