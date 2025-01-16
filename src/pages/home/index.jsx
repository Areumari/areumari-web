import React from 'react';
import * as S from './style';
import Header from "src/components/header";
import Body from 'src/components/body';

const Home = () => {
    return (
        <S.Wrapper>
            <Header></Header>
            <Body></Body>
        </S.Wrapper>
    )
}
export default Home;