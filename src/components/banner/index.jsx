import React from 'react';
import * as S from './style';
import BannerImg from 'src/assets/images/Frame 27.png';

const Banner = () => {
    return(
        <S.Wrapper src={BannerImg || null} alt="bener">
        </S.Wrapper>
    )
}
export default Banner;