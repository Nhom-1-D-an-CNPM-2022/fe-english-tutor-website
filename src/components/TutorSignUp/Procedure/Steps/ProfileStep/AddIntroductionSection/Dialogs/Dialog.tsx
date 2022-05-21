import { Avatar, Dialog as MuiDialog, DialogActions, DialogTitle } from '@mui/material';
import { titleStyle, wrapperStyle } from './style';
import DialogContent from './base/DialogContent/DialogContent';
import Button from '../../../../base/Button/Button';
import React, { ReactNode, useContext } from 'react';
import { ProfileStepContext } from '../../../../../../../contexts/TutorSignUp/TutorSignUpProcedure/ProfileStepContext';

interface Props {
  open: boolean;
  titleIcon: ReactNode;
  title: string;
  children: ReactNode;
  onClickSave: () => void;
  actionsHidden?: boolean;
}

export default function Dialog({
  open,
  titleIcon,
  title,
  children,
  onClickSave,
  actionsHidden,
}: Props) {
  const { closeDialog } = useContext(ProfileStepContext);

  return (
    <MuiDialog sx={wrapperStyle} open={open}>
      <DialogTitle sx={titleStyle}>
        {titleIcon}
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      {!actionsHidden && (
        <DialogActions>
          <Button type="text" onClick={closeDialog}>
            Cancel
          </Button>
          <Button size="small" type="contained" onClick={onClickSave}>
            Save
          </Button>
        </DialogActions>
      )}
    </MuiDialog>
  );
}
