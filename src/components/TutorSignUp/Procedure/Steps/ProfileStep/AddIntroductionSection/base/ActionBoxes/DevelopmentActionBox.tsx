import React from 'react';
import ActionBox from './ActionBox';
import { DevelopmentEditActionBox } from './EditActionBoxes';
import { DevelopmentActionBoxProps } from './constants';

export default function DevelopmentActionBox({
  title,
  titleIcon,
  titleSize = 'small',
  description,
  openDialogButtonLabel,
  currentValue,
  editButtonLabel,
  onClickButton,
  activeTitle,
}: DevelopmentActionBoxProps) {
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
      <DevelopmentEditActionBox currentValue={currentValue} />
    </ActionBox>
  );
}
