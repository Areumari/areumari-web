import React from 'react';
import * as S from './style';
import headerIcon from 'src/assets/images/headerIcon.png'
import searchIcon from 'src/assets/images/32/General/Search.png'

const Header = () => {
    const list = ['홈', '기술 스택 소개', '강의 찾기', '저장한 강의','동아리 소개'];

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
                <S.searchButton src={searchIcon || null} alt="searchIcon"/>
            </S.Nav>
            <S.MyLogo/>
        </S.Wrapper>
    )

}
export default Header;