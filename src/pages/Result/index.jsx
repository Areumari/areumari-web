import React, {useState} from "react";
import * as S from "./style";
import {useLocation} from "react-router-dom";
import Header from "src/components/header";

const Result = () => {
    const location = useLocation();
    const [result, setResult] = useState([]);
    const params = new URLSearchParams(location.search);
    const query = params.get("query") || "";

    return (
        <S.Wrapper>
            <Header/>

            <S.ErrorContainer>
                <S.Title>
                    setResult(...검색하신 결과를 찾을 수 없읍니다)
                </S.Title>
                <S.ErrorText>
                    다른 방식으로 검색해보세요. '{query}' 말고
                </S.ErrorText>
            </S.ErrorContainer>
        </S.Wrapper>
    )
}
export default Result;