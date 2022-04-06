import React from 'react';
import axios from 'axios';
import { Grid, Container, Button } from "@mui/material"
import StandardImageList from "../components/all/ImageList"
import InputAdornments from "../components/all/PriceInput"
// 토큰 이름 입력란 / 토큰 설명 입력란 생성
// axios 명령어 연결(아직 API 재정의 안됨)
const DonatePage = (props) => {
    const [price, setPrice] = React.useState(0.0026)

    // axios({
    //     url: `http://3.35.173.223:5050/user/login`,
    //     method: 'post',
    //     data: {
    //       "walletAddress": "0x22e16d492112a5987907b338e8c6297762Be4a54"
    //     }
    // }).then((res) =>{
    //     localStorage.setItem("accessToken", res.data.accessToken)
    // })
    return (
        <Container fixed>
            {props.props.accountButton}
            Account: {props.props.account}
            <Grid container>
                <Grid item xs={6}>
                    <StandardImageList></StandardImageList>
                </Grid>
                <Grid item xs={3} style={{ marginTop: "2em" }}>
                    <h3>기부금액설정</h3>
                    <InputAdornments
                        price={price}
                        onChange={(data) => setPrice(data)}
                    />
                    <p style={{ fontSize: "1px", marginLeft: "8em" }}>minETH : 0.0026ETH</p>
                    <Button
                        variant="contained"
                        onClick={() => {
                            // console.log(price)
                            props.props.mint("name", "desc", "temp", price)
                        }}
                    >구매하기</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default DonatePage;