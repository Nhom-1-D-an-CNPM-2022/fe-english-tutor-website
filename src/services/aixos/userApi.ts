import axiosMy from './axiosMy';

const userApi = {
  getInfo: async (accessToken: any) => {
    const url = `users/info`;

    return await axiosMy.get(url, { headers: { Authorization: `Bearer ${accessToken.jwt}` } });
  },
};

export default userApi;
