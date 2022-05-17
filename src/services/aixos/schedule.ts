import axiosMy from './axiosMy';

const scheduleApi = {
    getReservation: async () => {
        const url = `/booking/list/tutor`;
        return await axiosMy.get(url);
    },
    acceptReservation: async (params: IRespondReservation) => {
        const url = `/booking/accept`;
        return await axiosMy.put(url, { bookingId: params.bookingId, tutorResponse: params.tutorResponse });
    },
    rejectReservation: async (params: IRespondReservation) => {
        const url = `/booking/reject`;
        return await axiosMy.put(url, { bookingId: params.bookingId, tutorResponse: params.tutorResponse });
    },
};
export default scheduleApi;
