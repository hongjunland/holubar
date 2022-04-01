import { Select } from "@mui/material";
import { css } from "@emotion/react";
// import { useCallback, useState } from "react";

const SingleSelect = ({
    className , ...rest
})=>{

    return (
        <Select
            {...rest}
            displayEmpty
            css={css`
                width:100%;
            `}
        />
    );
}

export default SingleSelect;