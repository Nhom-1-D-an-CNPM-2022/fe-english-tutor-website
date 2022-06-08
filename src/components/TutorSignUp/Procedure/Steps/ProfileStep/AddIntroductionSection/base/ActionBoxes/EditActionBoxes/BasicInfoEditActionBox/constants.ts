export const accentBadges = {
  "North America": "/images/tutor-sign-up/steps/profile/accent-badges/US.png",
  Canada: "/images/tutor-sign-up/steps/profile/accent-badges/CA.png",
  USA: "/images/tutor-sign-up/steps/profile/accent-badges/US.png",
  "USA-Southern USA":
    "/images/tutor-sign-up/steps/profile/accent-badges/US.png",
  "North America - Other":
    "/images/tutor-sign-up/steps/profile/accent-badges/US.png",
  "United Kingdom / Republic of Ireland":
    "/images/tutor-sign-up/steps/profile/accent-badges/GB.png",
  "British - Received Pronunciation":
    "/images/tutor-sign-up/steps/profile/accent-badges/GB.png",
  Ireland: "/images/tutor-sign-up/steps/profile/accent-badges/IE.png",
  Scotland: "/images/tutor-sign-up/steps/profile/accent-badges/scotland.png",
  "British Isles - Other":
    "/images/tutor-sign-up/steps/profile/accent-badges/GB.png",
  "South Africa": "/images/tutor-sign-up/steps/profile/accent-badges/ZA.png",
  "Australia / New Zealand":
    "/images/tutor-sign-up/steps/profile/accent-badges/AU.png",
  Australia: "/images/tutor-sign-up/steps/profile/accent-badges/AU.png",
  "New Zealand": "/images/tutor-sign-up/steps/profile/accent-badges/NZ.png",
  Other: "/images/tutor-sign-up/steps/profile/accent-badges/united-nations.png",
  "": "/images/tutor-sign-up/steps/profile/accent-badges/united-nations.png",
};

export interface BasicInfo {
  displayName: string;
  hometown: string;
  accent: keyof typeof accentBadges | string;
  dateOfBirth: string;
}
