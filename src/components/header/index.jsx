import React from 'react';
import * as S from './style';
import headerIcon from 'src/assets/images/headerIcon.png'
import searchIcon from 'src/assets/images/32/General/Search.png'
import MyLogo from "src/components/myLogo";

const Header = () => {
    const list = ['강의 소개', '동아리 소개', '강의 순위', '저장한 강의'];

    return (
        <S.Wrapper>
            <S.Nav onClick={null}>
                <S.Logo src={headerIcon || null} alt="headerIcon"/>
            </S.Nav>
            <S.NavContainer>
                {list.map((item, index) => (
                    <S.Nav onClick={null} key={index}>
                        <S.NavText>{item}</S.NavText>
                    </S.Nav>
                ))}
            </S.NavContainer>
            <S.Nav>
                <S.Logo src={searchIcon || null} alt="searchIcon"/>
            </S.Nav>
            <S.MyLogo/>
        </S.Wrapper>
    )
}
export default Header;