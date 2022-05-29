import { BasicInfo } from "./EditActionBoxes/BasicInfoEditActionBox/constants";
import { Development } from "./EditActionBoxes/DevelopmentEditActionBox/constants";

function isBasicInfo(
  value: BasicInfo | string | Array<string> | Array<Development> | undefined,
): value is BasicInfo {
  return (value as BasicInfo)?.displayName !== undefined;
}

function isArrayOfDevelopment(
  value: Array<string> | Array<Development>,
): value is Array<Development> {
  return (value as Array<Development>).at(0)?.tags !== undefined;
}

export const isInvalidValue = (
  value: BasicInfo | string | Array<string> | Array<Development> | undefined,
) => {
  switch (true) {
    case typeof value === "string":
      return value === "";
    case value instanceof Array:
      let arrValue = value as Array<any>;

      if (arrValue.length === 0) {
        return true;
      }

      const isArrDevelopment = isArrayOfDevelopment(arrValue);

      if (isArrDevelopment) {
        const development = (arrValue as Array<Development>)[0];

        if (isInvalidDevelopment(development)) {
          return true;
        }

        return false;
      } else {
        const label = (arrValue as Array<string>)[0];

        if (isInvalidLabel(label)) {
          return true;
        }

        return false;
      }
    case isBasicInfo(value):
      return isInvalidBasicInfo(value as BasicInfo);
    default:
      return true;
  }
};

const isInvalidBasicInfo = (basicInfo: BasicInfo) => {
  return (
    !basicInfo.displayName || !basicInfo.hometown || !basicInfo.dateOfBirth
  );
};

const isInvalidLabel = (label: string) => {
  const indexOfOpenParenthesis = label.indexOf("(");

  return (
    !label.slice(0, indexOfOpenParenthesis) ||
    label.slice(indexOfOpenParenthesis) === "()"
  );
};

const isInvalidDevelopment = (development: Development) => {
  return (
    !development.description ||
    !development.title ||
    development.tags.length === 0
  );
};
