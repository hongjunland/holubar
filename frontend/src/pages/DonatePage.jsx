import React from 'react';
import { Grid, Container, Button } from "@mui/material"
import StandardImageList from "../components/all/ImageList"
// import InputAdornments from "../components/all/PriceInput"
import InputAdornments from '../components/donate/TextInput';
// 토큰 이름 입력란 / 토큰 설명 입력란 생성
// axios 명령어 연결(아직 API 재정의 안됨)
const DonatePage = (props) => {
    // const [price, setPrice] = React.useState(0.0026)
    const [values, setValues] = React.useState({
        price: 0.0026,
        title: '',
        desc: ''
      });
    return (
        <Container fixed>
            <Grid container>
                <Grid item xs={6}>
                    <StandardImageList></StandardImageList>
                </Grid>
                <Grid item xs={3} style={{ marginTop: "2em" }}>
                    <h3>기부금액설정</h3>

                    <InputAdornments
                        values={values}
                        props={props}
                        onClick={(data) => {
                            console.log(data)
                            props.props.mint(data.title, data.desc, "temp", data.amount)
                        }}
                        // onChange={(data) => setPrice(data)}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default DonatePage;