// import {css} from "@emotion/react";
import styled from '@emotion/styled';
import Banner from 'components/Banner';

const ProfileContainer = ()=>{
    return (
        <Container>
            <Banner/>
            <DivContainer>
                DivContainer
            </DivContainer>
            <MainContainer>
                MainContainer
            </MainContainer>
            <ProfilePageNavbar>

            </ProfilePageNavbar>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const DivContainer = styled.div`
    display: flex;
    grid-template-columns: 1fr 1fr;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 8px;
    width: 100%;
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
`
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
`

const ProfilePageNavbar = styled.div`

`

export default ProfileContainer;