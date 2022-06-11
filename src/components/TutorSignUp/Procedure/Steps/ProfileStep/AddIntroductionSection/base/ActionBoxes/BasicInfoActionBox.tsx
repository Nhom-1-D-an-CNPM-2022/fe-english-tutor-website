import React from 'react';
import ActionBox from './ActionBox';
import BasicInfoEditActionBox from './EditActionBoxes/BasicInfoEditActionBox/BasicInfoEditActionBox';
import { BasicInfoActionBoxProps } from './constants';

export default function BasicInfoActionBox({
  title,
  titleIcon,
  titleSize = 'small',
  description,
  openDialogButtonLabel,
  currentValue,
  editButtonLabel,
  onClickButton,
}: BasicInfoActionBoxProps) {
  return (
    <ActionBox
      currentValue={currentValue}
      title={title}
      titleIcon={titleIcon}
      titleSize={titleSize}
      description={description}
      openDialogButtonLabel={openDialogButtonLabel}
      onClickButton={onClickButton}
      editButtonLabel={editButtonLabel}
    >
      <BasicInfoEditActionBox currentValue={currentValue} />
    </ActionBox>
  );
}
