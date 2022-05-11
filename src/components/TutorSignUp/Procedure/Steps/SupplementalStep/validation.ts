import { TutorSignUpProfile } from "../../../../../redux/slices/tutorSignUpSlice";

export const isSupplementalQuestionsCompleted = (
  profile: TutorSignUpProfile,
) => {
  return profile.motivation && profile.source;
};
