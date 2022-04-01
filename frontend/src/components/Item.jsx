import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea} from '@mui/material';
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Item = ({
    item
})=>{
return (
    <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="289"
                src={item.tokenImg}
            />
            <CardContent
                css={css`
                    display:flex;
                    width: auto;
                `}
            >
                <CardContentLeft>
                    <LabelText>
                        {item.owner}
                    </LabelText>
                    <CardTitle>
                        {item.tokenName}
                    </CardTitle>
                </CardContentLeft>
                <CardContentRight>
                    <LabelText css={css`
                        justify-content: end;`}>
                        Price
                    </LabelText>
                    <CardPrice>
                        <img 
                        alt="ETH" 
                        src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
                        width="14px"
                        height="14px"
                        />
                        <span>{item.price}</span>
                    </CardPrice>
                </CardContentRight>
            </CardContent>
        </CardActionArea>
    </Card>
)
}

const LabelText = styled.div`
    color: rgb(112, 122, 131);
    font-weight: 500;
    font-size: 12px;
    display:flex;
`
const CardTitle = styled.div`
    color: rgb(53, 56, 64);
    font-size: 12px;
    letter-spacing: 0.1px;
    font-weight: 600;
    text-align: left;
`
const CardPrice = styled.div`
    display:flex;
    justify-content: end;
    align-items: center;
`
const CardContentLeft = styled.div`
    width: 60%;
`;
const CardContentRight = styled.div`
    width: 40%;
`;

export default Item;