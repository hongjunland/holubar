import React from 'react'
import {Grid, Container} from '@mui/material'

import { SwitchLabels as Switch } from '../components/all/Switch'
import { LabTabs } from '../components/all/SmallTab'
import { Button } from '@material-ui/core';


export function SalesRegist() {

  const tokenData = require('./../samplejson/SalesRegistPage.json');
  const [state, setState] = React.useState({
    sales: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    console.log(state.sales)
  };

  return (
    <Container fixed>
      <Grid container>
        <Grid item xs={5}>
          <img
            src={ tokenData.tokenImg }
            width="100%"
          />
        </Grid>
        <Grid item xs={5} style={{margin:'1em'}}>
          { tokenData.owner }
          <br />
          <h3>{ tokenData.tokenName }</h3>
          <Switch sales={state.sales} onChange={handleChange} name="sales"/>
          <LabTabs />
          <Button variant="contained">SAVE</Button>
        </Grid>
      </Grid>
    </Container>
  )
}