import { css } from '@emotion/react';

const Banner = props => {
    return (
        <div>
            <img src="https://as1.ftcdn.net/v2/jpg/02/70/64/54/1000_F_270645457_FR4CBhmmKSNqn4hk0X21PPzu4FuXLGxR.jpg"
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
