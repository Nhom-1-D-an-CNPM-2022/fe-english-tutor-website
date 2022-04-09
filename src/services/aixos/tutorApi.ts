import axiosMy from './axiosMy';

const tutorApi = {
    getAllTutor: async () => {
        const url = `/tutors`;
        return await axiosMy.get(url);
      },
}
export default tutorApi;