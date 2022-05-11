const TAGS = [
  "Advertising",
  "Agriculture",
  "Aviation",
  "Building and Architecture",
  "Education",
  "English Language Instruction",
  "Entrepreneurship",
  "Environment",
  "Fashion",
  "Finance and Banking",
] as const;

export interface Development {
  id: string;
  title: string;
  tags: Array<typeof TAGS[number]>;
  description: string;
}
