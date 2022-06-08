import { ReactNode } from "react";
import {
  BasicInfoEditActionBoxProps,
  ChipEditActionBoxProps,
  DevelopmentEditActionBoxProps,
  TextEditActionBoxProps,
} from "./EditActionBoxes/constants";

export interface InputActionBoxProps {
  description: string | string[];
  openDialogButtonLabel: string;
  onClickButton: () => void;
}

export interface ActionBoxProps extends InputActionBoxProps {
  currentValue?: any;
  title?: string;
  titleIcon?: ReactNode;
  titleSize?: "small" | "normal";
  activeTitle?: boolean;
  editButtonLabel?: string;
}

export type BasicInfoActionBoxProps = ActionBoxProps &
  BasicInfoEditActionBoxProps;

export type TextActionBoxProps = ActionBoxProps & TextEditActionBoxProps;

export type DevelopmentActionBoxProps = ActionBoxProps &
  DevelopmentEditActionBoxProps;

export type ChipActionBoxProps = ActionBoxProps & ChipEditActionBoxProps;
