import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import apiClient from "src/lib/customAxios";

export const useMyInfo = () => {
    const navigate = useNavigate();
    const [info, setInfo] = useState({
        "name": "",
        "snumber": "",
        "authority": ""
    });

    const getMyInfo = async () => {
        try {
            const response = await apiClient.get('/api/mypage')
            setInfo(response.data || {});
            return response.data
        } catch (error) {
            if (error.response?.status === 401) {
                navigate('/login')
            } else {
                throw error;
            }
        }
    }
    return {
        info,
        getMyInfo
    }
}