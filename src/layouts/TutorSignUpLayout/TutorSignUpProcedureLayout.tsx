import React from 'react';
import Sidebar from '../../components/TutorSignUp/Procedure/Sidebar/Sidebar';

export default function TutorSignUpProcedureLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}
