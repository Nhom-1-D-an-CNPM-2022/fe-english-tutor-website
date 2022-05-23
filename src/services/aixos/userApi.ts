import axiosMy from './axiosMy';

const userApi = {
  getInfo: async () => {
    const url = `users/info`;

    return await axiosMy.get(url);
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
};

export default userApi;
