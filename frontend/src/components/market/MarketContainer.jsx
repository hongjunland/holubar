import styled from "@emotion/styled";
import Drawer from "components/PersistentDrawerLeft";
import List from "components/List";
import SearchHeader from "components/SearchHeader";


const MarketContainer = ({items})=>{
    return (
    <Container>
        <FilterContainer>
            <Drawer/>
        </FilterContainer>
        <MainContainer>
            <SearchHeader items={items}/>
            <SeachView>
                <List items={items}/>
            </SeachView>
        </MainContainer>
    </Container>);
}

export default MarketContainer;

const Container = styled.div`
    width: 100%;
    @media (min-width: 600px){
        display: flex;
    }
`
const FilterContainer = styled.div`
    width: 340px;
    height: 100%;
`;

const MainContainer = styled.div`
    @media (min-width: 600px){
        flex: 1 0 0%;
        padding: 0px 28px;
    }
`;
const SeachView = styled.div`
    @media (min-width: 600px){
        padding: 16px 0px;
    }
`;

// const FilterContainer = styled.div`
//     margin: 0;
//     padding: 0;
// `;