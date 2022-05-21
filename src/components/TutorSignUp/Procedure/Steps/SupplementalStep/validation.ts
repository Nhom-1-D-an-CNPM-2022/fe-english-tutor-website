import { TutorSignUpProfile } from '../../../../../redux/slice/appSlice/tutorSignUpSlice';
import { OtherPlatform } from './constants';

export const isOtherPlatformsChanged = (
  otherPlatforms: Record<OtherPlatform, boolean>,
  profileOtherPlatforms: Record<OtherPlatform, boolean>,
) => {
  for (const platform of Object.keys(otherPlatforms)) {
    if (otherPlatforms[platform] !== profileOtherPlatforms[platform]) {
      return true;
    }
  }

  return false;
};

export const isSupplementalQuestionsCompleted = (profile: TutorSignUpProfile) => {
  return profile.motivation && profile.source;
};
