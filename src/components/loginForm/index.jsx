import React from 'react';
import * as S from './style'
import TextInput from "src/components/textInput";
import {useAuth} from "src/hooks/useAuth";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    const {...auth} = useAuth()
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <S.Wrapper>
            <S.Back onClick={goBack}>{'<-'} </S.Back>
            <S.Title>로그인</S.Title>
            <TextInput
                name={'email'}
                placeholder={'name@example.com'}
                value={auth.user.email}
                change={auth.changeInput}
                size={30}
                warn={auth.checkEmail ? null : '이메일 형식이 아닙니다'}
            />
            <TextInput
                name={'password'}
                placeholder={'*****'}
                value={auth.user.password}
                change={auth.changeInput}
                size={15}
                warn={auth.checkPassword ? null : '공백을 제외한 영어 대/소문자, 숫자를 4~15자 사이로 입력하여야 합니다' }
                isPassword
            />

            <S.ButtonContainer>
                <S.FormButton onClick={auth.signIn}>
                    <S.ButtonText>로그인</S.ButtonText>
                </S.FormButton>
                <S.Text>비밀번호 찾기</S.Text>
                <S.Text>회원가입</S.Text>
            </S.ButtonContainer>
        </S.Wrapper>
    )
}
export default LoginForm;