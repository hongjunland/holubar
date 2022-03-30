import * as React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import { InputAdornments as PriceInput } from './PriceInput';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'KOR',
    label: '원(원 기호가 백슬래시로 나옴;;',
  },
  {
    value: 'BTC',
    label: '฿(비트코인 단위)',
  },
  {
    value: 'ETM',
    label: '이더리움은 기호가 뭔지 모르겠음',
  },
];

export function SelectTextFields() {
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <PriceInput />
    </Box>
  );
}