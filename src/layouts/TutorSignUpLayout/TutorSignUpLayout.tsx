import React from 'react';
import TutorSignUpHeader from '../../components/TutorSignUp/Header/TutorSignUpHeader';
import TutorSignUpBody from '../../components/TutorSignUp/Body/TutorSignUpBody';

export default function TutorSignUpLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <TutorSignUpHeader />
      <TutorSignUpBody>{children}</TutorSignUpBody>
    </>
  );
}
