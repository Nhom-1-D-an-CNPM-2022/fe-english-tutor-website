import axiosMy from './axiosMy';

const scheduleApi = {
  getSchedule: async (params: any) => {
    const url = `schedule`;
    return await axiosMy.get(url, { params });
  },
};

export default scheduleApi;
