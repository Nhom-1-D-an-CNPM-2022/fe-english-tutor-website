export const SOURCES = [
  "Web search",
  "Friend/Family",
  "Job Boards",
  "Blogs",
  "Youtube",
  "Youtube Ad",
  "Facebook Groups",
  "Facebook Ad",
  "TEFL.org",
  "TeachAway",
  "Other",
] as const;

export const HEADER_TYPOGRAPHY = {
  TITLE: "Supplemental questions",
  DESCRIPTION: [
    "This information is used by our team internally and is not shared with students.",
  ],
};

export const BODY_TYPOGRAPHY = {
  MOTIVATION: {
    LABEL: "Why do you want to tutor on Cambly?",
    PLACEHOLDER:
      "Example: I'm a huge grammar nerd and I've loved learning about other cultures ever since...",
  },

  SOURCE: {
    LABEL: "Where did you hear about Cambly?",
  },

  OTHER_PLATFORMS: {
    LABEL: "Have you worked on any other tutoring platforms in the past?",
  },
};

export type Source = typeof SOURCES[number];

export const OTHER_PLATFORMS = ["VIPKid", "GoGokid", "ByteDance", "Other"];

export type OtherPlatform = typeof OTHER_PLATFORMS[number];

export const INPUT_LENGTH_CONSTRAINTS = {
  MOTIVATION: 500,
};
