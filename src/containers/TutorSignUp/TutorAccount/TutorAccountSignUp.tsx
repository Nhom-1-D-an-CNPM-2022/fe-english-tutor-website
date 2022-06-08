import React from 'react';
import { TutorAccountFormBox, TutorAccountImageBox } from '../../../components';

export default function TutorAccountSignUp() {
  return (
    <>
      <TutorAccountImageBox
        imageSrc="/images/tutor-sign-up/account-sign-up/tutor-signup-img.jpg"
        imageAlt="Cambly"
      />
      <TutorAccountFormBox
        title="Start Tutoring on Cambly"
        thirdPartyPrompt="Sign up with:"
        prompt="Sign up with your email address:"
        authType="signup"
        navPrompt="Already have an account?"
        navLinkLabel="Log in"
        navLink="/"
      />
    </>
  );
}
