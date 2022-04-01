import React from 'react'
import {Grid, Container, Button} from '@mui/material'

import SwitchLabels from '../components/all/Switch'
import LabTabs from '../components/all/SmallTab'


export default function SalesRegist() {

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
          <SwitchLabels
            sales={Boolean(tokenData.sales)}
            onChange={() => {
              if (Boolean(tokenData.sales)){
                tokenData.sales = ""
              }else{
                tokenData.sales = "1"
              }
            }}
          />
          <LabTabs 
            price={tokenData.price}
            onChange={(data)=>{
              tokenData.price=data
            }}
          />
          <Button 
            variant="contained"
            onClick={()=>{
              console.log(tokenData)
            }}
          >SAVE</Button>
        </Grid>
      </Grid>
    </Container>
  )
}