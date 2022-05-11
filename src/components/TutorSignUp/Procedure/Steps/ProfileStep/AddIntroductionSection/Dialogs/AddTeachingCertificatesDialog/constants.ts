export const certificateTypes = [
  "TESOL",
  "CELTA",
  "DELTA",
  "SLAT",
  "IBET",
  "TESL",
  "TYLEC",
  "TEFL",
  "Other relevant certificate",
] as const;

export interface Certificate {
  id: string;
  fileName: string;
  URLFile: string;
  type: typeof certificateTypes[number] | string;
}
