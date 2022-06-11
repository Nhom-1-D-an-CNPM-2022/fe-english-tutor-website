import React from 'react';
import { TutorAccountFormBox } from '../../../components';

export default function TutorAccountLogin() {
  return (
    <TutorAccountFormBox
      title="Welcome back to Cambly"
      thirdPartyPrompt="Log in with:"
      prompt="Log in with your email address:"
      authType="login"
      navPrompt="New to Cambly?"
      navLinkLabel="Sign up"
      navLink="/"
    />
  );
}
