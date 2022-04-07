import styled from '@emotion/styled';
import { Avatar, Typography, IconButton, TextField} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SettingsIcon from '@mui/icons-material/Settings';
import Banner from 'components/Banner';
import ProfileTab from './ProfileTab';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import MarketContainer from 'components/market/MarketContainer';
import itemList from "samplejson/ItemList.json";
import { useSelector, useDispatch } from "react-redux";
import { getMyInfo } from 'api/user';
import { findAllProducts } from 'api/nft';
import React from 'react';
import {updateItems} from 'state/assetsSlice'
import {updateUserInfo} from 'state/userSlice';
import { initialize } from 'state/filterSlice';
import CopyToClipboard from 'react-copy-to-clipboard';

const ProfileContainer = ()=>{
    const dispatch = useDispatch();
    const tabIndex = useSelector((state)=>state.tabIndex.value);
    const [loading , setLoading] = useState(true);
    const user = useSelector((state)=>state.user.info);
    const assets = useSelector((state)=>state.assets.items);
    const index = useSelector((state)=>state.tabIndex.value);
    const filterInfo = useSelector((state)=>state.filter.info);
    
    useEffect(()=>{
        if(loading) dispatch(initialize());
        getUserInfo();
    // },[index, filterInfo])
    },[dispatch, loading])

    const getUserInfo = async()=>{
        await getMyInfo((res)=>{
            dispatch(updateUserInfo(res.data));
            setLoading(false);
            getCollections(user, filterInfo);
        })
    }

    const getCollections = (userData, info)=>{
        if(index===0){
            const query = `status=${info.status}&max=${info.to}&min=${info.from}&condition=${info.sort}`;
            console.log(query);
            console.log(info);
            findAllProducts(query,(res)=>{
                // filterInfo
                const mySellList = res.data.sellList
                    .filter((item)=>item.user_id===userData.userId)
                    .filter((item)=>item.asset_name.includes(info.msg))
                dispatch(updateItems(mySellList));
            })
        }
        else{
            
        }
    }
    const summarize = (text)=>{
        return text.slice(0,5)+"..."+text.slice(-5);
    }
    const onClickSettingButton = (e)=>{
        alert("onClickSettingButton");
    }
    const onClickCopyButton = (e)=>{
        e.clipboardData.setData("Text", user.walletAddress)
        alert(user.walletAddress);
    }
    return (
        <Container>
            {
                loading ? <div>loading...</div>
            :<div>
            <Banner imgURL={user.profileImageUrl}/>
            <DivContainer>
                <FlexEndBlock>
                    <SettingButton onClick={onClickSettingButton}/>
                </FlexEndBlock>
            </DivContainer>
            <MainContainer>
                <ProfileImage>
                    <ProfileAvartar src={user.profileImageUrl} />
                </ProfileImage>
                <NicknameText>
                    {user.nickname}
                </NicknameText>
                <CopyButton onClick={onClickCopyButton}>
                    <ContentCopyIcon fontSize="small"/>
                    <TextAddress>
                        {summarize(user.walletAddress)}
                    </TextAddress>          
                </CopyButton>
                <BioTextField
                    disabled={true}
                    value={user.bio}
                />
            </MainContainer>
            <ProfileTab/>
            {tabIndex==0 ? <MarketContainer items = {assets? assets: itemList} page={"profile"}/> :
                <></>
            }
            </div>
            }
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
    align-items: center;
    display: flex;
    min-height: 18px;
    margin-top: 8px;
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

const SettingButton = props => (
    <IconButton
        onClick={props.onClick}
        css={css`
            padding: 12px;
            background-color: rgb(255, 255, 255);
            border: 1px solid rgb(229, 232, 235);
            border-radius: 15px;
        `}
    >
        <SettingsIcon/> 
    </IconButton>
);

const ProfileAvartar = props => (
    <Avatar 
    css={css`
        width:100%;
        height:100%;
    `}
    src={props.src}/>
);

const NicknameText = ({children})=>(
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
        {children}
    </Typography>
)

const CopyButton = ({children,...props})=>(
    <IconButton
        css={css`
        padding: 4px 8px;
        border: 1px solid rgb(229, 232, 235);
        border-radius: 16px;
    `}
    {...props}
    >
        {children}
    </IconButton>
)
const BioTextField = ({children,...props}) => (
    <TextField
        {...props}
        css={css`
        margin-top: 12px;
    `}
    />);
export default ProfileContainer;