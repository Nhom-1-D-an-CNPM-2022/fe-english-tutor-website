import axiosMy from './axiosMy';

const bookingApi = {
  bookLesson: async (requestOption: any) => {
    const url = `booking/`;
    return await axiosMy.post(url, requestOption);
  },
  getBookedLesson: async () => {
    const url = `booking/list/tutee`;
    return await axiosMy.get(url);
  },
  cancelLesson: async (params: any) => {
    const url = `booking/`;
    return await axiosMy.delete(url, { params });
  },
  getHistory: async () => {
    const url = `booking/history`;
    return await axiosMy.get(url);
  },
};

export default bookingApi;
