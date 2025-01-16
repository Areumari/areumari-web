import React from 'react';
import * as S from './style';
import Header from "src/components/header";
import Banner from "src/components/banner";
import TechStackList from "src/components/techStackList";

const Home = () => {
    return (
        <S.Wrapper>
            <Header/>
            <Banner/>
            <TechStackList/>
        </S.Wrapper>
    )
}
export default Home;