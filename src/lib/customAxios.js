import axios from 'axios';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';

// 기본 axios 인스턴스 설정
const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // API 의 기본 URL
    timeout: 5000, // 요청 타임아웃 시간
    headers: {
        'Content-Type': 'application/json',
    },
});

// 토큰 유효성 확인 및 재발급 함수
const refreshTokenIfNeeded = async () => {
    let accessToken = localStorage.getItem('access_token');
    const refreshToken = Cookies.get('refresh_token');

    // 토큰이 없으면 에러 처리
    if (!accessToken || !refreshToken) {
        throw new Error('로그인이 필요합니다.');
    }

    // JWT 디코딩 및 만료 시간 확인
    const decode = jwtDecode(accessToken);
    const nowDate = new Date().getTime() / 1000;

    // 토큰이 만료되었다면 재발급 요청
    if (decode.exp < nowDate) {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/reissue`, {
                accessToken,
                refreshToken,
            });

            // 새로운 토큰 저장
            accessToken = response.data.accessToken;
            localStorage.setItem('access_token', accessToken);

            const newRefreshToken = response.data.refreshToken;
            Cookies.set('refresh_token', newRefreshToken, {expires: 7, secure: true, sameSite: 'Strict'});

            return accessToken;
        } catch (error) {
            // 토큰 재발급 실패 시 처리
            localStorage.clear();
            Cookies.remove('refresh_token');
            throw new Error('인증 정보가 만료되었습니다. 다시 로그인해주세요.');
        }
    }

    return accessToken;
};

// 요청 인터셉터 설정
apiClient.interceptors.request.use(
    async (config) => {
        try {
            //모든 요청에 인증을 추가하므로 예외 필요
            if (config.url.includes('')) {
                return config;
            } else {
                const accessToken = await refreshTokenIfNeeded();
                config.headers['Authorization'] = `Bearer ${accessToken}`;
                return config;
            }
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
            const status = error.response.status;
            if (status === 401) {
                console.error('인증 에러: 다시 로그인하세요.');
                localStorage.clear();
                Cookies.remove('refresh_token');
            } else if (status === 403) {
                console.error('권한 없음: 접근 권한이 없습니다.');
            }
        }
        return Promise.reject(error);
    }
);

// 로그인 요청 함수
export const login = async (id, password) => {
    try {
        const response = await apiClient.post('/auth/login', {id, password});

        // 토큰 저장
        const {accessToken, refreshToken} = response.data;
        localStorage.setItem('access_token', accessToken);
        Cookies.set('refresh_token', refreshToken, {expires: 7, secure: true, sameSite: 'Strict'});

        return response.data;
    } catch (error) {
        console.error(error.response?.data || error.message);
        throw error;
    }
};

// 회원가입 요청 함수
export const register = async (id, password, studentNumber) => {
    try {
        const response = await apiClient.post('/auth/register', {id, password, studentNumber});
        return response.data;
    } catch (error) {
        console.error(error.response?.data || error.message);
        throw error;
    }
};

