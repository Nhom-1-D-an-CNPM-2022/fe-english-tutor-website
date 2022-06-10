import React, { useEffect } from 'react';
import TutorSignUpHeader from '../../components/TutorSignUp/Header/TutorSignUpHeader';
import TutorSignUpBody from '../../components/TutorSignUp/Body/TutorSignUpBody';
import { useAppDispatch } from '../../redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import tutorSignUpApi from '../../services/aixos/tutorSignUpApi';
import { setProfile } from '../../redux/slice/appSlice/tutorSignUpSlice';
import { useHistory } from 'react-router-dom';

export default function TutorSignUpLayout({ children }: React.PropsWithChildren<{}>) {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const profile = useSelector((store: RootState) => store.tutorSignUpSlice);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    const fetchProfile = async () => {
      try {
        const response = await tutorSignUpApi.getProfile(accessToken);
        const profile = response.data;
        dispatch(setProfile(profile));
      } catch (error) {
        history.push({
          pathname: '/home',
        });
      }
    };

    if (accessToken && !profile.isFetched) {
      fetchProfile();
    }
  }, []);

  return (
    <>
      <TutorSignUpHeader />
      <TutorSignUpBody>{children}</TutorSignUpBody>
    </>
  );
}
