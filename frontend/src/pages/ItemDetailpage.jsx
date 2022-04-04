import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Grid,Container,Button} from "@mui/material"
import {TreeView, TreeItem} from "@mui/lab";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { EthereumIcon } from '../components/Icons'


export default function ItemDetail() {

  // 샘플데이터
  const tokenData = require('./../samplejson/ItemDetailPage.json');
  const params = useParams();
  console.log(params.itemId);
  // axios({
  //   url: `/${params.itemId}`,
  //   headers: {
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
          <img src={ tokenData.tokenImg } width="100%" />
        </Grid>
        <Grid item xs={5} style={{ margin: '1em' }}>
          { tokenData.owner }
          <br />
          <h3>{ tokenData.tokenName }</h3>
          <div 
            style={
              { border: '1px solid gray', 
                margin: '1em 0 1em 0', 
                padding: '1em' }
              }
            >
            <EthereumIcon/>
            <strong>{ tokenData.price }</strong>
            <br />
            <Button variant="contained" color="primary">
              구매하기
            </Button>
          </div>
          <TreeView 
            style={
              { border: '1px solid gray', 
                margin: '0 0 1em 0', 
                padding: '1em 0 1em 0' }
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
              { border: '1px solid gray',
                margin: '0 0 1em 0',
                padding: '1em 0 1em 0' }
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