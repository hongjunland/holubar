import styled from "@emotion/styled";
import { Input, MenuItem } from "@mui/material";
import { css } from "@emotion/react";
import { Select } from "@mui/material";
import { useState} from "react";
import SearchIcon from '@mui/icons-material/Search';

const SearchHeader = ({items})=>{
    const [type, setType] = useState(0);
    const [searchText, setSearchText] = useState("");
    const handleSortTypeOnChange = (event) => {
        setType(event.target.value);
    };
    const handlesearchTextOnChange = (e)=>{
        setSearchText(e.target.value);
    };
    const handleSeachOnkeyPress = (e)=>{
        if(e.key=='Enter'){
            console.log(searchText +" 검색!");
        } 
    }
    return(
        <Container>
            <Text>{items.length} items</Text>
            <SearchBarContainer>
                <SearchIcon
                    css={css`
                        justify-content: center;
                        margin-right: 8px;
                        height:auto;
                    `}
                />
                <input
                    css={css`
                        line-height: 26px;
                        cursor: text;
                        border: 0;
                        width: 100%;
                    `}
                    placeholder="Seach items...."
                    value={searchText}
                    onChange={handlesearchTextOnChange}
                    onKeyPress={handleSeachOnkeyPress}
                /> 
            </SearchBarContainer>
            <SelctContainer>
                <Select
                    displayEmpty
                    onChange={setType}
                    value={type}
                    css={css`
                        width:100%;
                    `}
                >
                    <MenuItem value={0}>Recently</MenuItem>
                    <MenuItem value={1}>Oldest</MenuItem>
                    <MenuItem value={2}>Price: High to Low</MenuItem>
                    <MenuItem value={3}>Price: Low to High</MenuItem>
                </Select>
            </SelctContainer>
        </Container>
    );
}

const Container = styled.div`
    @media (min-width: 600px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 24px 0px 10px;
    }
`;
const SearchBarContainer = styled.div`
    max-width: 768px;
    display: flex;
    width: 100%;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    border: 1px solid rgb(229, 232, 235);
    padding: 8px;
`
const SelctContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width:15%;
    max-width: 100%;
`;
const Text = styled.div`
    @media (min-width: 600px)
    @media (min-width: 768px){
        display: block;
        margin: 16px 0px;
    }
    font-size: 16px;
`;

function escapeRegExp(value) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
export default SearchHeader;