import React from 'react';
import { Autocomplete } from '@mui/material';
import DialogTextField from '../DialogTextField/DialogTextField';

interface Props {
  options: readonly string[];
  value?: any[];
  limitTags?: number;
  label?: string;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  handleChange?: (event: React.SyntheticEvent<Element, Event>, value: string[]) => void;
}

export default function DialogAutocomplete({
  options,
  value = [],
  limitTags = -1,
  label = '',
  placeholder = '',
  error = false,
  helperText = '',
  handleChange,
}: Props) {
  return (
    <Autocomplete
      value={value}
      limitTags={limitTags}
      onChange={handleChange}
      options={options}
      getOptionLabel={(option) => option}
      renderInput={(params) => (
        <DialogTextField
          {...params}
          label={label}
          placeholder={placeholder}
          error={error}
          helperText={helperText}
          variant="select"
        />
      )}
      filterSelectedOptions
      multiple
    />
  );
}
