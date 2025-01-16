import React from 'react';
import * as S from './style';

const TechStack = ({item}) => {
    return (
        <S.Wrapper>
            <S.Img src={item.img} alt='error!' />
            <S.TitleContainer>
                <S.Title>{item.value}</S.Title>
            </S.TitleContainer>
        </S.Wrapper>
    )
}
export default TechStack;