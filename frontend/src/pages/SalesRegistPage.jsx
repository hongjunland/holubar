import React from 'react'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { SwitchLabels as Switch } from '../components/all/Switch'
import { LabTabs } from '../components/all/SmallTab'
import { Button } from '@material-ui/core';


export function SalesRegist() {

  const tokenData = require('./../samplejson/SalesRegistPage.json');

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
          <Switch />
          <LabTabs />
          <Button variant="contained">SAVE</Button>
        </Grid>
      </Grid>
    </Container>
  )
}