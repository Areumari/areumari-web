import React from 'react';
import * as S from './style';
import Header from "src/components/header";
import Banner from "src/components/banner";
import TechStackList from "src/components/techStackList";
import Inquiry from "src/components/inquiry";

const Home = () => {
    return (
        <S.Wrapper>
            <Header/>
            <Banner/>
            <TechStackList isStatic/>
            <Inquiry/>
        </S.Wrapper>
    )
}
export default Home;