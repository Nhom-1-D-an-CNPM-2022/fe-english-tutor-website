import { OtherPlatform } from './constants';

export const isOtherPlatformsChanged = (
  otherPlatforms: Record<OtherPlatform, boolean>,
  profileOtherPlatforms: Record<OtherPlatform, boolean>,
) => {
  for (const platform of Object.keys(otherPlatforms)) {
    if (
      profileOtherPlatforms[platform] !== undefined &&
      profileOtherPlatforms[platform] !== otherPlatforms[platform]
    ) {
      return true;
    }
  }

  return false;
};
