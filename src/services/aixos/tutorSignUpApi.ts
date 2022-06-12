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
    return await axiosMy.put(
      url,
      {
        data: {
          ...newInformation,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );
  },

  updateProfileMedia: async (profileMedia: any) => {
    const url = 'tutors/profile/media';
    return await axiosMy.put(url, profileMedia, {
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
