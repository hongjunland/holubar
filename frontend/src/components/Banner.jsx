import { css } from '@emotion/react';

const Banner = ({imgURL}) => {
    return (
        <div
            css={
                css`
                position: relative;
                z-index: 0;
                `
            }
        >
            <img src={imgURL}
                css={css`
                    width: 100%;
                    height: 225px;
                    position: relative;
                    z-index: 0;
                `}
            />
        </div>
    );
}
export default Banner;
