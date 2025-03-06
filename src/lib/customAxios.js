import axios from 'axios';
import Cookies from 'js-cookie';
import {refreshTokenIfNeeded} from "src/lib/tokenService";

// 기본 axios 인스턴스 설정
const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // API 의 기본 URL
    timeout: 5000, // 요청 타임아웃 시간
    headers: {
        'Content-Type': 'application/json',
    },
});

// 요청 인터셉터 설정
apiClient.interceptors.request.use(
    async (config) => {
        try {
            //모든 요청에 인증을 추가하므로 예외 필요
            // if (config.url.includes('')) {
            //     const accessToken = await refreshTokenIfNeeded();
            //     config.headers['Authorization'] = `Bearer ${accessToken}`;
            // }
            return Promise.resolve(config);
        } catch (error) {
            console.error('Request interceptor error:', error);
            return Promise.reject(error);
        }
    },
    (error) => Promise.reject(error)
);

// 응답 인터셉터 설정
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // 공통 에러 처리
        if (error.response) {
            const originalRequest = error.config;
            const status = error.response.status;
            if (status === 401 && !originalRequest._retry) {
                const accessToken = refreshTokenIfNeeded();
                originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
                return apiClient(originalRequest)
            } else if (status === 403) {
                console.error('권한 없음: 접근 권한이 없습니다.');
            }
        }
        return Promise.reject(error);
    }
);

export default apiClient;