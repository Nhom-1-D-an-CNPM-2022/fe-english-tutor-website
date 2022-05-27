export const CERTIFICATE_TYPES = [
  'TESOL',
  'CELTA',
  'DELTA',
  'SLAT',
  'IBET',
  'TESL',
  'TYLEC',
  'TEFL',
  'Other relevant certificate',
] as const;

export interface Certificate {
  id: string;
  fileName: string;
  URLFile: string;
  type: typeof CERTIFICATE_TYPES[number] | string;
}

export const MAX_CERTIFICATE_ITEMS = 9;
export const MAX_CERTIFICATE_SIZE = 10000000;
export const EXCEED_SIZE_ERROR_MSG = 'The file you selected is too large.';
