import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Accordion, AccordionSummary,AccordionDetails, MenuItem, TextField, Button} from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterListIcon from '@mui/icons-material/FilterList';
import ToggleButtons from './ToggleButtons';
import Select from "components/Select";
import { EthereumIcon, USDIcon } from './Icons';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrency, changeFrom , changeTo} from 'state/priceRangeSlice';
import { useEffect } from 'react';

const SearchFilter=()=>{
  const currency = useSelector((state)=>state.priceRange.currency);
  const from = useSelector((state)=>state.priceRange.from);
  const to = useSelector((state)=>state.priceRange.to);
  const dispatch = useDispatch();
  const handleValid = ()=>{
    if(from==='' || to==='') return false;
    if(from<=to) return true;
    return false;
  }
  const onClickRange = ()=>{
      console.log('click!');
  }
  const handleChangeCurrency = (e)=>{
    dispatch(changeCurrency(e.target.value));
  }
  const handleChangeFrom = (e)=>{
    dispatch(changeFrom(e.target.value));
  }
  const handleChangeTo = (e)=>{
    dispatch(changeTo(e.target.value));
  }
  const init = ()=>{
    dispatch(changeCurrency(""));
    dispatch(changeFrom(""));
    dispatch(changeTo(""));
  }
  useEffect(()=>{
    init();
  },[]);

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
            type={currency || ''}
            onChange={handleChangeCurrency}
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
            <TextField name="from" type='number' placeholder="Min" value={from || ''} 
            onChange={handleChangeFrom}/>
            <p>to</p>
            <TextField name="to" type='number' placeholder="Max" value={to || ''} 
            onChange={handleChangeTo}/>
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
