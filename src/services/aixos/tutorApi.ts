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
  updateTutorProfile: async (data: any) => {
    const url = `/tutors/profile/me`;

    return await axiosMy.put(url, data);
  },
};
export default tutorApi;
