import axiosMy from './axiosMy';

const scheduleApi = {
  getSchedule: async (params: any) => {
    const url = `schedule`;
    return await axiosMy.get(url, { params });
  },
  createSchedule: async (requestOption: any) => {
    const url = `schedule`;
    return await axiosMy.post(url, requestOption);
  },
  getReservation: async () => {
    const url = `/booking/list/tutor`;
    return await axiosMy.get(url);
  },
  acceptReservation: async (params: IRespondReservation) => {
    const url = `/booking/accept`;
    return await axiosMy.put(url, {
      bookingId: params.bookingId,
      tutorResponse: params.tutorResponse,
    });
  },
  rejectReservation: async (params: IRespondReservation) => {
    const url = `/booking/reject`;
    return await axiosMy.put(url, {
      bookingId: params.bookingId,
      tutorResponse: params.tutorResponse,
    });
  },
};

export default scheduleApi;
