import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

export const SearchBox = () => {
  const [value, setValue] = React.useState('');
  const handleChange = (prop: any) => (event: any) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        placeholder="Tên"
        variant="outlined"
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};
