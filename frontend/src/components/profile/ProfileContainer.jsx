import styled from '@emotion/styled';
import { Avatar, Typography, IconButton, TextField} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SettingsIcon from '@mui/icons-material/Settings';
import Banner from 'components/Banner';
import ProfileTab from './ProfileTab';
import { useState } from 'react';
import { css } from '@emotion/react';
import MarketContainer from 'components/market/MarketContainer';
import itemList from "samplejson/ItemList.json";

const ProfileContainer = ()=>{
    
    const [profileBackgroundImage,setProfileBackgroundImage] = useState("https://as1.ftcdn.net/v2/jpg/02/70/64/54/1000_F_270645457_FR4CBhmmKSNqn4hk0X21PPzu4FuXLGxR.jpg");
    const [profileImage,setProfileImage] = useState("assets/default_profile.jpg");
    const [nickname,setNickname] = useState("nickname");
    const [walletAddress,setWalletAddress] = useState("0xc2d8FcB473A1b400FED7B2b1d4c1453CB14ABdwq");
    const [bio,setBio] = useState("Hello!");
    
    const summarize = (text)=>{
        return text.slice(0,5)+"..."+text.slice(-5);
    }
    return (
        <Container
        >
            <Banner imgURL={profileBackgroundImage}/>
            <DivContainer>
                <FlexEndBlock>
                    <IconButton
                        css={css`
                            padding: 12px;
                            background-color: rgb(255, 255, 255);
                            border: 1px solid rgb(229, 232, 235);
                            border-radius: 15px;
                        `}
                    >
                        <SettingsIcon/> 
                    </IconButton>
                </FlexEndBlock>
            </DivContainer>
            <MainContainer>
                <ProfileImage>
                    <Avatar 
                        css={css`
                            width:100%;
                            height:100%;
                        `}
                    src={profileImage}/>
                </ProfileImage>
                <Typography
                    css={css`
                        margin-top: 12px;
                        max-width: 80vw;
                        align-items: center;
                        font-size: 30px;
                        font-weight: 600;
                        min-height: 40px;
                        margin-bottom: 0px;
                    `}
                >
                    {nickname}
                </Typography>
                <IconButton
                    css={css`
                        padding: 4px 8px;
                        border: 1px solid rgb(229, 232, 235);
                        border-radius: 16px;
                    `}
                >
                    <ContentCopyIcon fontSize="small"/>
                    <TextAddress
                        css={css`
                            align-items: center;
                            display: flex;
                            min-height: 18px;
                            margin-top: 8px;
                        `}
                    >{summarize(walletAddress)}</TextAddress>          
                </IconButton>
                <TextField
                    disabled={true}
                    value={bio}
                    css={css`
                        margin-top: 12px;
                    `}
                />
            </MainContainer>
            <ProfileTab/>
            <MarketContainer items = {itemList}/>
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const DivContainer = styled.div`
    display: flex;
    grid-template-columns: 1fr 1fr;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 8px;
    position: sticky;
    top: 72px;
    z-index: 40;
    left: 0px;
    height: 72px;
    margin-bottom: calc(-72px);
    transition: opacity 0.2s ease-in 0s;
    @media (min-width: 600px){
        padding: 0px 24px;
        opacity: 1;
        border: 0px;
        height: 98px;
        margin-bottom: calc(-98px);
    }
`;
const MainContainer = styled.div`
    position: relative;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    min-height: 200px;
    margin: 0px auto;
    @media (max-width: 600px){
        max-width: 500px;
    }
`;
const ProfileImage = styled.div`
    border: 2px solid rgb(255, 255, 255);
    margin-top: -64px;
    border-radius: 50%;
    width: 130px;
    min-width: 130px;
    height: 130px;
    min-height: 130px;
`;
const TextAddress = styled.div`
    color: rgb(112, 122, 131);
    font-weight: 500;
    font-size: 16px;
    margin-right: 8px;
`;
const FlexEndBlock = styled.div`
    justify-content: flex-end;
    display: flex;
    flex-grow: 1;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export default ProfileContainer;