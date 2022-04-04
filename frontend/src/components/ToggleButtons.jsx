import {useState} from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Button } from '@mui/material';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
const ToggleButtons = ()=>{
    const [status, setStatus] = useState(0);

    const handleAlignment = (event, newStatus) => {
        setStatus(newStatus);
    };

    return (
        <ToggleButtonGroup
            value={status}
            exclusive
            onChange={handleAlignment}
            color="primary"
            css={css`
                width: 100%;
            `}
        >
            <ToggleButton value="0">ALL</ToggleButton>
            <ToggleButton value="1">Buy Now</ToggleButton>
            <ToggleButton value="2">Not for sale</ToggleButton>
        </ToggleButtonGroup>
    );
}


export default ToggleButtons;