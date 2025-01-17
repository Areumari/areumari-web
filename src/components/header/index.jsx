import React, {useState} from 'react';
import * as S from './style';
import headerIcon from 'src/assets/images/headerIcon.png'
import searchIcon from 'src/assets/images/32/General/Search.png'
import Search from "src/modals/search";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const lists = ['강의 소개', '동아리 소개', '강의 순위', '저장한 강의'];
    const [onSearch, setOnSearch] = useState(false);

    return (
        <S.Wrapper>
            <S.HeaderContainer>
                <S.Nav onClick={() => navigate('/')}>
                    <S.Logo src={headerIcon || null} alt="headerIcon"/>
                </S.Nav>
                <S.NavContainer>
                    {lists.map((item, index) => (
                        <S.Nav onClick={null} key={index}>
                            <S.NavText>{item}</S.NavText>
                        </S.Nav>
                    ))}
                </S.NavContainer>
                <S.Nav>
                    <S.SearchButton src={searchIcon || null} onClick={() => {setOnSearch(!onSearch)}} alt="searchIcon"/>
                </S.Nav>
                <S.MyLogo/>
            </S.HeaderContainer>
            {onSearch && <Search setOnClose={setOnSearch} />}
        </S.Wrapper>
    )
}
export default Header;