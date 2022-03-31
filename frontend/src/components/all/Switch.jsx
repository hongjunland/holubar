import * as React from 'react';
import {FormGroup, FormControlLabel, Switch} from '@mui/material'

export function SwitchLabels(props) {

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch 
            checked={props.sales}
            onChange={props.onChange}
            name="switch"
          />
        }
        label="판매등록"
      />
    </FormGroup>
  );
}