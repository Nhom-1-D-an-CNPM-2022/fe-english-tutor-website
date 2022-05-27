import { Box, Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { TextEditActionBoxProps } from '../constants';
import EditActionBox from '../EditActionBox';
import { MAX_TEXT_LENGTH } from './constants';
import style from './style';

export default function TextEditActionBox({ currentValue }: TextEditActionBoxProps) {
  const [readMode, setReadMode] = useState<'more' | 'less' | ''>('');

  useEffect(() => {
    if (currentValue) {
      setReadMode(currentValue.length <= MAX_TEXT_LENGTH ? '' : 'less');
    }
  }, [currentValue]);

  const handleClickReadMore = () => {
    setReadMode('more');
  };

  const handleClickReadLess = () => {
    setReadMode('less');
  };

  return (
    <EditActionBox>
      <Typography sx={style.getTypographyStyle(readMode)}>{currentValue}</Typography>

      {currentValue && currentValue.length > MAX_TEXT_LENGTH && (
        <Box>
          {readMode === 'less' && (
            <Link
              component="button"
              underline="hover"
              sx={style.readButtonStyle}
              onClick={handleClickReadMore}
            >
              Read more
            </Link>
          )}

          {readMode === 'more' && (
            <Link
              component="button"
              underline="hover"
              sx={style.readButtonStyle}
              onClick={handleClickReadLess}
            >
              Read less
            </Link>
          )}
        </Box>
      )}
    </EditActionBox>
  );
}
