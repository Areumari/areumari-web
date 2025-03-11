import {useEffect, useState} from "react";
import apiClient from "src/lib/customAxios";
import Cookies from "js-cookie";

export const useAuth = () => {
    const [user, setUser] = useState({
        id: "",
        email: "",
        password: "",
        checkPassword: "",
        number: "",
        verifyCode: "",
    });
    const [isEmail, setCheckEmail] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [checkPassword, setCheckPassword] = useState(false);
    const [isNumber, setIsNumber] = useState(false);
    const [isVerify, setIsVerify] = useState(false);
    const [pass, setPass] = useState(true);

    useEffect(() => {
        setCheckEmail(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,4}$/.test(user.email))
        setIsPassword(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*\s).{4,15}$/.test(user.password))
        setCheckPassword(user.password === user.checkPassword);
        setIsNumber(/^[1-3][1-9](?!00)[0-2][0-9]$/.test(user.number));
        setIsVerify(/^[0-9]{4}/.test(user.verifyCode));
    }, [user])

    const changeInput = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }
    const sendVerifyCode = async () => {
        try {
            const response = await apiClient.post('/api/auth/sendVerificationEmail', {
                "email": user.email,
            })
            return response.data.message;
        } catch (error) {
            throw error;
        }
    }
    const verifyCode = async (code) => {
        try {
            const response = await apiClient.post('/api/auth/verifyCode', {
                "email": user.email,
                "code": code,
            })
            return response.data.message;
        } catch (error) {
            throw error;
        }
    }
    const signIn = async () => {
            try {
                const response = await apiClient.post('/api/auth/signIn', {
                    "name": user.id,
                    "snumber": user.number,
                    "password": user.password
                });

                // 토큰 저장
                const {accessToken, refreshToken} = response.data;
                localStorage.setItem('access_token', accessToken);
                Cookies.set('refresh_token', refreshToken, {expires: 7, secure: true, sameSite: 'Strict'});
                return response.data;
            } catch (error) {
                console.log(error.response);
                if (error.response.status === 400) {
                    setPass(false);
                }
                else {
                    throw error;
                }
        }
    }
    const signUp = async () => {
        if (isEmail && isPassword && isNumber) {
            try {
                const response = await apiClient.post('/api/auth/signUp', {
                    "name": user.id,
                    "snumber": user.number,
                    "password": user.password,
                    "authority": "ROLE_USER"
                });
                return response.data;
            } catch (error) {
                console.error(error.response?.data || error.message);
                throw error;
            }
        }
    }
    const changePW = () => {
        console.error('미구현된 함수')
    }

    return {
        user,
        isEmail,
        isPassword,
        checkPassword,
        isNumber,
        isVerify,
        pass,
        changeInput,
        sendVerifyCode,
        verifyCode,
        signIn,
        signUp,
        changePW,
    }
}