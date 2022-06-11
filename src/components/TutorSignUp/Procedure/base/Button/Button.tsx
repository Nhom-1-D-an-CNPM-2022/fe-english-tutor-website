import React, { ReactNode } from 'react';
import { Button as MuiButton } from '@mui/material';
import getStyle from './getStyle';

interface Props {
  children: ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  color?: 'primary' | 'secondary' | 'white' | 'lightGrey';
  size?: 'small' | 'normal' | 'large';
  type: 'contained' | 'outlined' | 'text';
  component?: any;
}

function Button({
  children,
  disabled,
  onClick,
  startIcon,
  endIcon,
  color,
  size,
  type,
  component,
}: Props) {
  return (
    <MuiButton
      onClick={onClick}
      sx={getStyle({ type, color, size })}
      variant={type}
      startIcon={startIcon}
      endIcon={endIcon}
      component={component}
      disabled={disabled}
    >
      {children}
    </MuiButton>
  );
}

Button.defaultProps = {
  disabled: undefined,
  onClick: undefined,
  startIcon: undefined,
  endIcon: undefined,
  color: 'primary',
  size: 'normal',
};

export default Button;
