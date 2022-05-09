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
};
export default tutorApi;
