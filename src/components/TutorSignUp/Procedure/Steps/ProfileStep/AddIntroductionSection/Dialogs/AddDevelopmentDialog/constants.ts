export const TAGS = [
  'Advertising',
  'Agriculture',
  'Aviation',
  'Building and Architecture',
  'Education',
  'English Language Instruction',
  'Entrepreneurship',
  'Environment',
  'Fashion',
  'Finance and Banking',
] as const;

export interface Development {
  id: string;
  title: string;
  tags: Array<typeof TAGS[number]> | string[] | [];
  description: string;
}

export const INPUT_LENGTH_CONSTRAINTS = {
  TITLE: 125,
  DESCRIPTION: 250,
};

export const MAX_ITEMS = 20;

export const LIMIT_TAGS = 4;
