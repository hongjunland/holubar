import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Accordion, AccordionSummary,AccordionDetails, MenuItem} from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterListIcon from '@mui/icons-material/FilterList';
import ToggleButtons from './ToggleButtons';
import Select from "components/Select";
import { useState } from 'react';
import { EthereumIcon, USDIcon } from './Icons';

const SearchFilter=()=>{
  const [currency, setCurrency] = useState("0");
  const handleCurrencyOnChange = (e)=>{
    setCurrency(e.target.value);
  };
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
const Text = ({children})=>(
  <p
    css={css`
      font-size: 16px;
      color: rgb(4, 17, 29);
      font-weight: 600;
    `}
  >{children}</p>
)
