import { Development } from "./AddDevelopmentDialog/constants";
import { Language } from "./AddLanguagesDialog/constants";
import { Certificate } from "./AddTeachingCertificatesDialog/constants";

export const TEXTAREA_INPUT_LENGTH_CONSTRAINT = 7000;

export const isEmptyString = (str: string) => {
  return str === "";
};

export const isEmptyArray = (arr: Array<any>) => {
  return arr.length === 0;
};

export const isInvalidLanguage = (language: Language) => {
  return !language.language || !language.dialect;
};

export const isInvalidDevelopment = (development: Development) => {
  return (
    !development.title ||
    !development.description ||
    development.tags.length === 0
  );
};

export const isInvalidCertificate = (certificate: Certificate) => {
  return !certificate.fileName || !certificate.type;
};
