import React from 'react';
import {Grid,Container, Button} from "@mui/material"
import StandardImageList from "../components/all/ImageList"
import InputAdornments from "../components/all/PriceInput"
import { tokenMint } from 'web3/Web3Client';

const DonatePage= ()=>{
    const [price, setPrice] = React.useState(0.0026)
    const donating = async (name, desc, url) => {
        tokenMint(name, desc, url, price);
    }

    return(
        <Container fixed>
            <Grid container>
                <Grid item xs={6}>
                    <StandardImageList></StandardImageList>
                </Grid>
                <Grid item xs={3} style={{marginTop:"2em"}}>
                    <h3>기부금액설정</h3>
                    <InputAdornments
                        price={price}
                        onChange={(data) => setPrice(data)}
                    />
                    <p style={{fontSize:"1px", marginLeft:"8em"}}>minETM : 0.0026ETM</p>
                    <Button 
                        variant="contained"
                        onClick={donating("name", "desc", "imageURI")}
                    >구매하기</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default DonatePage;