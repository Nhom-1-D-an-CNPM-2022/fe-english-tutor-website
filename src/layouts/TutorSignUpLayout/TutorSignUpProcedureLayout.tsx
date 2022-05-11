import React from "react";
import TutorSignUpProcedureProvider from "../../contexts/TutorSignUpProcedure/TutorSignUpProcedureContext";
import Sidebar from "../../components/TutorSignUp/Procedure/Sidebar/Sidebar";

export default function TutorSignUpProcedureLayout({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <TutorSignUpProcedureProvider>
      <Sidebar />
      {children}
    </TutorSignUpProcedureProvider>
  );
}
