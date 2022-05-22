import axiosMy from './axiosMy';

const tutorSignUpApi = {
  signUpAccount: async (account: any) => {
    const url = 'tutors';
    return await axiosMy.post(url, account);
  },

  loginAccount: async (method: 'tradition' | 'facebook' | 'google', account: any) => {
    let url;

    switch (method) {
      case 'tradition':
        url = 'users/login';
        break;
      case 'facebook':
        url = 'users/login/facebook';
        break;
      case 'google':
        url = 'users/login/google';
        break;
      default:
        url = 'users/login';
        break;
    }

    return await axiosMy.post(url, account);
  },

  getProfile: async (accessToken: any) => {
    const url = 'tutors/profile/me';
    return await axiosMy.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },

  updateProfile: async (newInformation: any) => {
    const url = 'tutors/profile/me';
    return await axiosMy.put(url, newInformation, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
  },

  updateProfilePicture: async (newUrl: any) => {
    const url = 'tutors/profile/picture';
    return await axiosMy.put(url, newUrl, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
  },

  updateVideoIntroduction: async (newUrl: any) => {
    const url = 'tutors/profile/video-intro';
    return await axiosMy.put(url, newUrl, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
  },

  updateTeachingCertificates: async (newTeachingCertificates: any) => {
    const url = 'tutors/profile/certificates';
    return await axiosMy.put(url, newTeachingCertificates, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
  },
};

export default tutorSignUpApi;
