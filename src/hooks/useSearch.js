import {useCallback, useState} from "react";
import {useNavigate} from "react-router-dom";

export const useSearch = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();
        if (query.trim())
            navigate(`/results?search_query=${encodeURIComponent(query)}`);
        else {
            console.error('빈 값은 검색할 수 없어요');
        }
    }
    const handleOnChange = (e) => {
        setQuery(e.target.value);
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            search(e);
        }
    };
    const quickSearch = (e) => {
        setQuery(e.target.textContent);
        navigate(`/results?search_query=${encodeURIComponent(e.target.textContent)}`);
    }
    return {
        query,
        setQuery,
        quickSearch,
        handleOnChange,
        search,
        handleKeyDown,
    }
}