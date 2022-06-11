import axiosMy from './axiosMy';

const tutorApi = {
  getAllTutor: async () => {
    const url = `/tutors`;
    return await axiosMy.get(url);
  },
  searchAllTutors: async (params: string) => {
    const url = `/tutors/search`;
    return await axiosMy.get(url, { params });
  },
  getTutorsProfile: async (id: string) => {
    const url = `/tutors/profile/${id}`;
    return await axiosMy.get(url);
  },

  getMyProfileTutor: async (accessToken: any) => {
    const url = `/tutors/profile/me`;

    return await axiosMy.get(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  },

  updateTutorProfile: async (data: any, accessToken: any) => {
    const url = `/tutors/profile/me`;

    return await axiosMy.put(url, {
      data,
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  },
  loginTutor: async (tutor: any) => {
    const url = `/users/login-tutor`;
    return await axiosMy.post(url, tutor);
  },
  getInfoTutor: async () => {
    const url = `/tutors/get-info`;
    return await axiosMy.get(url);
  },
};
export default tutorApi;
