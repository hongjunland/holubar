import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Accordion, AccordionSummary,AccordionDetails, MenuItem, TextField, Button} from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterListIcon from '@mui/icons-material/FilterList';
import ToggleButtons from './ToggleButtons';
import Select from "components/Select";
import { useState } from 'react';
import { EthereumIcon, USDIcon } from './Icons';

const SearchFilter=()=>{
  const [currency, setCurrency] = useState("0");
  const initPriceRange = {from:'', to:''};
  const [priceRange, setPriceRange] = useState(initPriceRange);

  const handleCurrencyOnChange = (e)=>{
    setCurrency(e.target.value);
  };
  const handleChange = async(e)=>{
    const {name, value} = e.target;
    await setPriceRange({...priceRange, [name]: parseInt(value)});
    handleValid();
  }
  const handleValid = ()=>{
    if(priceRange.from==='' || priceRange.to==='') return false;
    if(priceRange.from<=priceRange.to) return true;
    return false;
  }
  const onClickRange = ()=>{
      console.log('click!');
  }

  return (
    <>
      <FiterHeader>
        <FilterListIcon
          size="24"
          css={css`
            margin-right: 10px;
            height: auto;
          `}
        />
        <Text>Filter</Text>
      </FiterHeader>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="panel1a-header"
        >
          <Text>Status</Text>
        </AccordionSummary>
        <AccordionDetails>
          <ToggleButtons/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="panel2a-header"
        >
          <Text>Price</Text>
        </AccordionSummary>
        <AccordionDetails>
          <CurrencySelect
            type={currency}
            onChange={handleCurrencyOnChange}
          >
            <MenuItem value="USD">
              <USDIcon />
                United States Dollar (USD)
              </MenuItem>
            <MenuItem value="ETH">
            <EthereumIcon/>
              Ether (ETH)
            </MenuItem>
          </CurrencySelect>
          <PriceContent>
            <TextField name="from" type='number' placeholder="Min" value={priceRange.from} onChange={handleChange}/>
            <p>to</p>
            <TextField name="to" type='number' placeholder="Max" value={priceRange.to} onChange={handleChange}/>
          </PriceContent>
          <Button variant="contained" disabled={!handleValid()} onClick={onClickRange}>Apply</Button>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default SearchFilter;
const CurrencySelect = props=> <Select {...props} onChange={props.onChange}/>;

const FiterHeader = styled.div`
  display:flex;
  padding: 0px 16px;
`;
const PriceContent = styled.div`
  display:flex;
  font-size: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const Text = ({children})=>(
  <p
    css={css`
      font-size: 16px;
      color: rgb(4, 17, 29);
      font-weight: 600;
    `}
  >{children}</p>
)
