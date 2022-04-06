import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Grid,Container,Button} from "@mui/material"
import {TreeView, TreeItem} from "@mui/lab";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { EthereumIcon } from '../components/Icons'


export default function ItemDetail(props) {
  const [tokenData, setTokenData] = useState(require('./../samplejson/ItemDetailPage.json'))
  const [tokenDetail, setTokenDetail] = useState(require('./../samplejson/sampleUser.json'))
  const [userData, setUserData] = useState()
  const params = useParams();
  useEffect(() => {
    axios.get(`http://3.35.173.223:5050/nft/${params.itemId}`, {
      headers: {
        accessToken: `${localStorage.getItem("accessToken")}`,
      }
    }).then((res)=>{
      setTokenData(res.data)
      console.log(tokenData)
    }).then(()=>{
      axios.get(`http://3.35.173.223:5050/user/profile/${tokenData.userId}`, {
        headers: {
          accessToken: `${localStorage.getItem("accessToken")}`,
        }
      }).then((res) =>{
        setUserData(res.data)
      })
    }).catch((err)=>{
      console.log(err)
    })
  },[])



  return (
    <Container fixed>
      <Button
        onClick={()=>{
          // setTokenDetail(props.props.getToken(tokenData.tokenId))
          // console.log(tokenDetail)
          // console.log(userData)
        }}
      >버어튼</Button>
      <Grid container>
        <Grid item xs={6}>
          <img src={ tokenData.assetImageUrl } width="100%" />
          {/* {tokenImg} */}
        </Grid>
        <Grid item xs={5} style={{ margin: '1em' }}>
          <a href="/profile/{userData.userId}"
          // <a href="/profile"
            style={{textDecoration:"none", textColor:"blue"}}
          >
            dsfsdf
            {/* { userData.nickname } */}
          </a>
          <br />
          <h1>{ tokenData.assetName }</h1>
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
            <Button 
              variant="contained" 
              color="primary" 
              style={{width:"132px", height:"42px"}}
              onClick={()=>{
                props.props.buying(tokenData.tokenId, tokenData.price)
              }}
            >
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
              {tokenData.assetDesc}
              {/* <TreeItem nodeId='2' label="created by :{}">sdgdfgfd</TreeItem> */}
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
              {/* 사실 토큰 주소가 아니라 소유자 지갑 주소임;; */}
              Contract Address : {tokenDetail.owner} <br />
              기부금 : {tokenDetail.donateAmmount} <br />
            </TreeItem>
          </TreeView>
        </Grid>
      </Grid>
    </Container>
  )
}