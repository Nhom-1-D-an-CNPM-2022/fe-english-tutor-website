import { TutorSignUpProfile } from "../../../../../redux/slices/tutorSignUpSlice";

export const isProfileCompleted = (profile: TutorSignUpProfile) => {
  return (
    profile.displayName &&
    profile.hometown &&
    profile.dateOfBirth &&
    profile.introduction &&
    profile.videoIntroduction &&
    profile.languages[0].language &&
    profile.languages[0].dialect
  );
};
