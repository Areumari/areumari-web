import React from 'react';
import * as S from './style';
import Header from "src/components/header";
import MyInfo from "src/components/myInfo";

const User = () => {
    return (
        <S.Wrapper>
            <Header />
            <MyInfo />
        </S.Wrapper>
    )
}
export default User;