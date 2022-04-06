import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {Grid, Container, Button} from '@mui/material'

import SwitchLabels from '../components/all/Switch'
import LabTabs from '../components/all/SmallTab'


export default function SalesRegist() {

  const tokenData = require('./../samplejson/SalesRegistPage.json');
  const params = useParams();
  // console.log(params.itemId);
  // axios({
  //   url: `/${params.itemId}`,
  //   headers:{
  //     "accessToken": localStorage.getItem("accessToken")
  //   }
  // }).then((res) => {
  //   const tokenData = JSON.parse(res)
  //   console.log(res)
  // }).catch((err) => {
  //   console.log(err)
  // })
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
              // axios({
              //   url: '/trade/sell',
              //   method: 'post',
              //   headers: {
              //     "accessToken": localStorage.getItem("accessToken")
              //   },
              //   data: {
              //     "assetId": tokenData.assetId,
              //     "price": tokenData.price
              //   }
              // })
            }}
          >SAVE</Button>
        </Grid>
      </Grid>
    </Container>
  )
}