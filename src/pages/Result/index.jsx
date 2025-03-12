import React, {useEffect, useState} from "react";
import * as S from "./style";
import {useLocation} from "react-router-dom";
import Header from "src/components/header";
import {useSearch} from "src/hooks/useSearch";
import Post from "src/components/post";

const Result = () => {
    const location = useLocation();
    const [result, setResult] = useState([]);
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("search_query") || "";
    const search = useSearch(searchQuery);
    const fetchResults = async () => {
        try {
            const resultsResponse = await search.getResults();
            setResult(resultsResponse?.data || []);
        } catch (error) {
            console.error("Failed to fetch results", error);
            setResult([]);
        }
    };

    useEffect(() => {
        fetchResults();
    },[])
    return (
        <S.Wrapper>
            <Header/>
            {result.length > 0 ? (
                result.map((item, index) =>
                    <Post data={item} key={index} />)
            ) : (
                <S.ErrorContainer>
                    <S.Title>검색하신 결과를 찾을 수 없읍니다</S.Title>
                    <S.ErrorText>다른 방식으로 검색해보세요. '{searchQuery}' 말고</S.ErrorText>
                </S.ErrorContainer>
            )}
        </S.Wrapper>
    )
}
export default Result;