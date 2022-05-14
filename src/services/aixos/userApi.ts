import axiosMy from './axiosMy';

const userApi = {
  getInfo: async () => {
    const url = `users/info`;

    return await axiosMy.get(url);
  },
};

export default userApi;
