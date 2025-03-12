import {useState} from "react";
import {useNavigate} from "react-router-dom";
import apiClient from "src/lib/customAxios";

export const useSearch = (initQuery='') => {
    const [query, setQuery] = useState(initQuery);
    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();
        if (query.trim())
            navigate(`/results?search_query=${encodeURIComponent(query)}`);
        else {
            console.error('빈 값은 검색할 수 없어요');
        }
    }
    const getResults = async () => {
        try {
            return await apiClient.get('/api/posts/search', {
                params: {
                    "searchType": "TITLE",
                    "keyword": query
                }
            });
        } catch (error) {
            throw error;
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
        getResults,
    }
}