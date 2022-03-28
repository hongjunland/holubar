import { css } from '@emotion/react';

const Stack = ({className, children})=>{
    return (
        <div
            className={className}
            css={css`
                padding: 0 24px;
                display: flex;
                flex-direction: column;
            `}
        >
            {children}
        </div>
    )
}

export default Stack;