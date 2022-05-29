import React from 'react';
import ActionBox from './ActionBox';
import { TextEditActionBox } from './EditActionBoxes';
import { TextActionBoxProps } from './constants';

export default function TextActionBox({
  title,
  titleIcon,
  titleSize = 'small',
  description,
  openDialogButtonLabel,
  currentValue,
  editButtonLabel,
  onClickButton,
  activeTitle,
}: TextActionBoxProps) {
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
      <TextEditActionBox currentValue={currentValue} />
    </ActionBox>
  );
}
