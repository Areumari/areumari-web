import React, {useState} from 'react';
import * as S from './style';
import headerIcon from 'src/assets/images/headerIcon.png'
import searchIcon from 'src/assets/images/32/General/Search.png'
import Search from "src/modals/search";
import {useLocation, useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const lists = [{name:'홈', path: '/'}, {name:'기술 스택 소개', path:'/techStacks'}, {name:'동아리 소개',path: ''}, {name:'강의 순위',path: ''}, {name:'저장한 강의'}];
    const [onSearch, setOnSearch] = useState(false);

    return (
        <S.Wrapper>
            <S.HeaderContainer>
                <S.Nav onClick={() => navigate('/')}>
                    <S.Logo src={headerIcon || null} alt="headerIcon"/>
                </S.Nav>
                <S.NavContainer>
                    {lists.map((item, index) => (
                        <S.Nav onClick={() => {navigate(item.path)}} key={index} className={location.pathname === item.path ? 'active' : null}>
                            <S.NavText>{item.name}</S.NavText>
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