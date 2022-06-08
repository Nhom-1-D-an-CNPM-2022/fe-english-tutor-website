export default {
  getTypographyStyle: (readMode: 'less' | 'more' | '') => {
    const commonStyle = {
      display: 'block',
      lineHeight: 1.75,
      whiteSpace: 'pre-line',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      wordWrap: 'break-word',
    };

    switch (readMode) {
      case 'more': {
        return {
          ...commonStyle,
        };
      }

      case 'less': {
        return {
          ...commonStyle,
          maxHeight: '140px',
        };
      }

      case '': {
        return {
          ...commonStyle,
        };
      }
    }
  },
  readButtonStyle: {
    fontSize: '13px',
    color: '#228891 !important',
  },
};
