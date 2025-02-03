import React from 'react';
import * as S from './style'
import Header from "src/components/header";
import TechStackList from "src/components/techStackList";

const TechStackInfo = () => {
    return (
        <S.Wrapper>
            <Header/>
            <TechStackList/>
        </S.Wrapper>
    )
}
export default TechStackInfo