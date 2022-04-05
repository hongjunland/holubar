import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Grid,Container,Button} from "@mui/material"
import {TreeView, TreeItem} from "@mui/lab";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { EthereumIcon } from '../components/Icons'


export default function ItemDetail() {
  axios({
    url: `http://3.35.173.223:5050/user/login`,
    method: 'post',
    data: {
      "walletAddress": "0x22e16d492112a5987907b338e8c6297762Be4a54"
    }
  }).then((res) =>{
    localStorage.setItem("accessToken", res.data.accessToken)
  })

  // 샘플데이터
  const params = useParams();
  // const tokenData = require('./../samplejson/ItemDetailPage.json');
  let tokenData;
  axios.get(`http://3.35.173.223:5050/nft/${params.itemId}`)
    .then((res) => {
      tokenData = res.data
      // console.log(res.data)
      if (tokenData === "no token error"){
        console.log(111111111111111111111111111111)
      }
    }).catch((err) => {
      console.log(err)
    })

  return (
    <Container fixed>
      <Grid container>
        <Grid item xs={6}>
          <img src={ tokenData.tokenImg } width="100%" />
        </Grid>
        <Grid item xs={5} style={{ margin: '1em' }}>
          <a href="/profile/{tokenData.owner}"
            style={{textDecoration:"none", textColor:"blue"}}
          >
            { tokenData.owner }
          </a>
          <br />
          <h1>{ tokenData.tokenName }</h1>
          <div 
            style={
              { border: '1px solid lightGray', 
                margin: '1em 0 1em 0', 
                padding: '1em',
                borderRadius: '15px'
              }
              }
            >
            <span>
              <img 
                alt="ETH" 
                src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
                width="30px"
                height="30px"
              />
            </span>
            <span style={{fontSize:"30px", fontWeight:"bold"}}>  { tokenData.price }</span>
            <br />
            <Button variant="contained" color="primary" style={{width:"132px", height:"42px"}}>
              구매하기
            </Button>
          </div>
          <TreeView 
            style={
              { border: '1px solid lightGray', 
                margin: '0 0 1em 0', 
                padding: '1em 0 1em 0',
                borderRadius: '15px'
              }
              }
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            <TreeItem nodeId='1' label="Description">
              <TreeItem nodeId='2' label="created by :{}" />
            </TreeItem>
          </TreeView>
          <TreeView 
            style={
              { border: '1px solid lightGray',
                margin: '0 0 1em 0',
                padding: '1em 0 1em 0',
                borderRadius: '15px'
              }
            }
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            <TreeItem nodeId="1" label="detail">
              <TreeItem 
              nodeId="2" 
              label="ContractAddr" 
              />
              <TreeItem nodeId="3" label="Token ID" />
              <TreeItem nodeId="4" label="Blockchain" />
            </TreeItem>
          </TreeView>
        </Grid>
      </Grid>
    </Container>
  )
}

// {
//   "assetId": 1,
//   "userId": 1,
//   "assetName": "asset",
//   "assetDesc": "desc",
//   "assetImageUrl": "www.tm1.com",
//   "tokenId": "41323",
//   "marketStatus": 0,
//   "price": 0
//   }