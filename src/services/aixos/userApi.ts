import axiosMy from './axiosMy';

const userApi = {
  getInfo: async (accessToken: any) => {
    const url = `users/info`;

    return await axiosMy.get(url, {
      headers: { Authorization: `Bearer ${accessToken.accessToken}` },
    });
  },
  addFavoriteTutor: async (tutorId: any, accessToken: any) => {
    const url = `favorites/tutor`;
    return await axiosMy.post(url, {
      tutorId,
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  },
  getFavoriteTutors: async (accessToken: any) => {
    const url = `favorites/tutors`;
    return await axiosMy.get(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  },
  getMessages: async (userId: any, accessToken: any) => {
    const url = `messages/with/${userId}`;
    return await axiosMy.get(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  },
};

export default userApi;
