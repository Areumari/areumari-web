import {useCallback, useState} from "react";
import {useNavigate} from "react-router-dom";

export const useSearch = (setClose) => {

    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/results?query=${encodeURIComponent(query)}`, {replace: true});
            setClose(false)
        } else {
            console.log(query);
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
        setQuery(e.target.textContent)
        search(e);
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