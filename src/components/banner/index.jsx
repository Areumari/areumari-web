import React from 'react';
import * as S from './style';
import BannerImg from 'src/assets/images/Frame 27.jpg';

const Banner = () => {
    return(
        <S.Wrapper src={BannerImg || null} alt="bener" />
    )
}
export default Banner;