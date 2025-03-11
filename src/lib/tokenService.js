
// 토큰 유효성 확인 및 재발급 함수
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";
import axios from "axios";
// import apiClient from "src/lib/customAxios";

export const refreshTokenIfNeeded = async () => {
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