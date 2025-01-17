import React, {useState, useEffect, useRef} from 'react';
import * as S from './style';
import searchIcon from 'src/assets/images/32/General/Search.png'
import {useSearch} from "src/hooks/useSearch";
import ModalPortal from "src/modals/modalPortal";

const Search = ({setOnClose}) => {
    const modalRef = useRef(null);
    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setOnClose(false); // 모달 닫기
        }
    };
    const {...search} = useSearch();
    const [quickSearch, setQuickSearch] = useState([]);
    useEffect(() => {
        setQuickSearch(['M6A1', 'Tiger II(H)', 'T-34-85(D-5T)', 'Churchill VII']);
    }, []);

    return (
        <ModalPortal>
            <S.Wrapper onClick={handleOutsideClick}>
                <S.SearchContainer ref={modalRef}>
                    <S.InputContainer>
                        <S.Icon src={searchIcon} alt="search"/>
                        <S.Input placeholder='검색어를 입력해주세요'
                                 value={search.query}
                                 onChange={search.handleOnChange}
                                 onKeyDown={search.handleKeyDown}
                        />/>
                    </S.InputContainer>
                    <S.QuickSearchContainer>
                        <S.QuickSearchTitle>Quick Search</S.QuickSearchTitle>
                        {quickSearch.map((item, index) => (
                            <S.QuickSearch key={index} onClick={search.quickSearch}>
                                {item}
                            </S.QuickSearch>
                        ))}
                    </S.QuickSearchContainer>
                </S.SearchContainer>
            </S.Wrapper>
        </ModalPortal>
    )
}
export default Search;