import React from 'react';
import {Grid,Container,Button} from "@mui/material"
import {TreeView, TreeItem} from "@mui/lab";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


export default function ItemDetail() {

  // 샘플데이터
  const tokenData = require('./../samplejson/ItemDetailPage.json');

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
            <img 
              src="data:image/png;base64,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" 
              width="8%" 
            />
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