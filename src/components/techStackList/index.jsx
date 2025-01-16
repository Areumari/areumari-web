import React from 'react';
import * as S from './style';
import Vector from "src/assets/images/Vector.png";
import img from "src/assets/images/maki_arrow.png";

const TechStackList = () => {
    return (
        <S.Wrapper>
            <S.ListContainer>
                <S.Vecter src={Vector || null}></S.Vecter>
                <S.Text>요즘 많이 쓰는 기술 스택</S.Text>
                <S.Arrow src={img || null} alt='->'></S.Arrow>
            </S.ListContainer>
        </S.Wrapper>
    )
}
export default TechStackList;