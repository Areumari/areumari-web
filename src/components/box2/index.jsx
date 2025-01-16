import React from 'react';
import * as S from './style';
import Vecter from 'src/assets/images/Vector.png';
import img from 'src/assets/images/maki_arrow.png';

const Box2 = () => {
    return(
        <S.Wrapper2>
            <S.Vecter src={Vecter||null}></S.Vecter>
            <S.Text>요즘 많이 쓰는 기술 스택</S.Text>
            <S.Arrow src={img|null} alt='->'></S.Arrow>
        </S.Wrapper2>
    )
}

export default Box2;