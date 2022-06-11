export const mainLanguages = ["English"] as const;

export const additionalLanguages = [
  "Mandarin",
  "Hindi",
  "Spanish",
  "French",
  "Arabic",
  "Bengali",
  "Russian",
  "Portuguese",
  "Indonesian",
] as const;

export const englishDialects = [
  "North America",
  "Canada",
  "USA",
  "USA-Southern USA",
  "North America - Other",
  "United Kingdom / Republic of Ireland",
  "British - Received Pronunciation",
  "Ireland",
  "Scotland",
  "British Isles - Other",
  "South Africa",
  "Australia / New Zealand",
  "Australia",
  "New Zealand",
  "Other",
] as const;

export const fluencyLevels = [
  "Native",
  "Fluent",
  "Conversational",
  "Basic",
] as const;

export interface Language {
  id: string;
  language:
    | typeof mainLanguages[number]
    | typeof additionalLanguages[number]
    | string;
  dialect:
    | typeof englishDialects[number]
    | typeof fluencyLevels[number]
    | string;
}
