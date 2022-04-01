import styled from "@emotion/styled";
import { Input, MenuItem } from "@mui/material";
import { useState} from "react";
import Select from "components/Select";
import SearchBar from "./SearchBar";

const SearchHeader = ({items})=>{
    const [searchText, setSearchText] = useState("");
    const [sortType, setSortType] = useState("Recently");
    const handleSeachOnkeyPress = (e)=>{
        if(e.key=='Enter'){
            console.log(searchText +" 검색!");
        } 
    }
    const handlesearchTextOnChange = (e)=>{
        setSearchText(e.target.value);
    };
    const handleSortTypeOnchange= event=>{
        setSortType(event.target.value);
    }
    return(
        <Container>
            <Text>{items.length} items</Text>
            <SearchBarContainer>
                <SearchBar
                    className={SearchBarContainer}
                    value={searchText}
                    onChange={handlesearchTextOnChange}
                    onKeyPress={handleSeachOnkeyPress}
                />
            </SearchBarContainer>
            <SelctContainer>
                <SortTypeSelect
                    type={sortType}
                    onChange={handleSortTypeOnchange}
                >
                    <MenuItem value={0}>Recently</MenuItem>
                    <MenuItem value={1}>Oldest</MenuItem>
                    <MenuItem value={2}>Price: High to Low</MenuItem>
                    <MenuItem value={3}>Price: Low to High</MenuItem>
                </SortTypeSelect>
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
    width: 100%;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    border: 1px solid rgb(229, 232, 235);
    padding: 8px;
`
const SelctContainer = styled.div`
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

const SortTypeSelect = props=> <Select {...props} onChange={props.onChange}/>;
export default SearchHeader;