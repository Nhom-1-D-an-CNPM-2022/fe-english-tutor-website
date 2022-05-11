import axiosMy from "./axiosMy";

const tutorSignUpApi = {
  updateProfile: async (newInformation: any) => {
    const url = "tutors/profile/me";
    return await axiosMy.put(url, newInformation);
  },

  updateProfilePicture: async (newUrl: any) => {
    const url = "tutors/profile/picture";
    return await axiosMy.put(url, newUrl);
  },

  updateVideoIntroduction: async (newUrl: any) => {
    const url = "tutors/profile/video-intro";
    return await axiosMy.put(url, newUrl);
  },

  updateTeachingCertificates: async (newTeachingCertificates: any) => {
    const url = "tutors/profile/certificates";
    return await axiosMy.put(url, newTeachingCertificates);
  },

  updateSupplementalQuestions: async (newAnswers: any) => {
    const url = "tutors/profile/supplementalQuestions";
    return await axiosMy.put(url, newAnswers);
  },
};

export default tutorSignUpApi;
