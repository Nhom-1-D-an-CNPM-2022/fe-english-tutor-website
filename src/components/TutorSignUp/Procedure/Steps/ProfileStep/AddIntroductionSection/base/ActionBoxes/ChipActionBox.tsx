import React from 'react';
import ActionBox from './ActionBox';
import ChipEditActionBox from './EditActionBoxes/ChipEditActionBox/ChipEditActionBox';
import { ChipActionBoxProps } from './constants';

export default function ChipActionBox({
  title,
  titleIcon,
  titleSize = 'small',
  description,
  openDialogButtonLabel,
  currentValue,
  editButtonLabel,
  onClickButton,
  activeTitle,
}: ChipActionBoxProps) {
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
      activeTitle={activeTitle}
    >
      <ChipEditActionBox currentValue={currentValue} />
    </ActionBox>
  );
}
