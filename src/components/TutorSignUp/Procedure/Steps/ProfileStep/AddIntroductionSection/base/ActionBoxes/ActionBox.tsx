import { Box, Link, Stack, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import InputActionBox from './InputActionBox/InputActionBox';
import { ActionBoxProps } from './constants';
import { isInvalidValue } from './validation';
import React, { useEffect, useState } from 'react';
import { linkButtonStyle, titleWrapperStyle } from './style';

export default function ActionBox({
  currentValue,
  children,
  title,
  titleIcon,
  titleSize = 'small',
  activeTitle = false,
  editButtonLabel = 'Edit',
  description,
  openDialogButtonLabel,
  onClickButton,
}: React.PropsWithChildren<ActionBoxProps>) {
  const [isInvalid, setIsInvalid] = useState<boolean>(true);

  useEffect(() => {
    setIsInvalid(isInvalidValue(currentValue));
  }, [currentValue]);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems={editButtonLabel === 'Edit' ? 'flex-start' : 'center'}
      marginLeft={editButtonLabel === 'Edit' ? 0 : '-6px'}
      width="100%"
    >
      <Box>
        <Stack direction="row" spacing={1.25} sx={titleWrapperStyle(activeTitle, isInvalid)}>
          <Box>{titleIcon}</Box>
          <Box>
            {title &&
              (titleSize === 'small' ? (
                <Typography marginBottom={1.25} variant="subtitle1">
                  {title}
                </Typography>
              ) : (
                <Typography marginBottom={1.25} variant="h5">
                  {title}
                </Typography>
              ))}
            {isInvalid ? (
              <InputActionBox
                description={description}
                openDialogButtonLabel={openDialogButtonLabel}
                onClickButton={onClickButton}
              />
            ) : (
              <>{children}</>
            )}
          </Box>
        </Stack>
      </Box>
      {!isInvalid && (
        <Box paddingRight={editButtonLabel === 'Edit' ? '2px' : 0}>
          <Link sx={linkButtonStyle} onClick={onClickButton} underline="hover" component="button">
            {editButtonLabel} <EditIcon />
          </Link>
        </Box>
      )}
    </Stack>
  );
}
