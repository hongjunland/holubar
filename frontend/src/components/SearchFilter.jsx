import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Accordion, AccordionSummary,AccordionDetails} from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterListIcon from '@mui/icons-material/FilterList';


const SearchFilter=()=>{
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

        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default SearchFilter;

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