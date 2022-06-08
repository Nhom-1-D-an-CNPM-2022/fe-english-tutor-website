import { BasicInfo } from "./BasicInfoEditActionBox/constants";
import { Development } from "./DevelopmentEditActionBox/constants";

export interface BasicInfoEditActionBoxProps {
  currentValue?: BasicInfo;
}

export interface TextEditActionBoxProps {
  currentValue?: string;
}

export interface DevelopmentEditActionBoxProps {
  currentValue?: Array<Development>;
}

export interface ChipEditActionBoxProps {
  currentValue?: Array<string>;
}
