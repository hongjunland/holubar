import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Accordion, AccordionSummary,AccordionDetails, MenuItem} from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterListIcon from '@mui/icons-material/FilterList';
import ToggleButtons from './ToggleButtons';
import Select from "components/Select";
import { useState } from 'react';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


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
          <CurrencySelect>
            <MenuItem value="USD">
              <img 
                alt="USD" 
                src="https://svgsilh.com/svg/1159943.svg"
                width="14px"
                height="14px"
                css={css`
                  margin-right: 10px;
                  height: auto;
                `}
              />
                United States Dollar (USD)
              </MenuItem>
            <MenuItem value="ETH">
              <img 
                alt="ETH" 
                src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
                width="14px"
                height="14px"
                css={css`
                  margin-right: 10px;
                  height: auto;
                `}
              />  Ether (ETH)
            </MenuItem>
          </CurrencySelect>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'KOR',
    label: '원(원 기호가 백슬래시로 나옴;;',
  },
  {
    value: 'BTC',
    label: '฿(비트코인 단위)',
  },
  {
    value: 'ETM',
    label: '이더리움은 기호가 뭔지 모르겠음',
  },
];
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