import React from 'react';
import * as S from '../style'
import TextInput from "src/components/textInput";
import {useAuth} from "src/hooks/useAuth";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    const {...auth} = useAuth()
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const goForgotPassword = () => navigate('/forgot-PW');
    const goSignup = () => navigate('/signup')
    return (
        <S.Wrapper>
            <S.Back onClick={goBack}>{'←'} </S.Back>
            <S.Title>로그인</S.Title>
            <TextInput
                title={'아이디'}
                name={'id'}
                placeholder={'아이디를 입력해주세요'}
                value={auth.user.id}
                change={auth.changeInput}
                size={30}
                warn={!auth.pass && '아이디 또는 비밀번호가 일치하지 않습니다'}
            />
            <TextInput
                title={'비밀번호'}
                name={'password'}
                placeholder={'비밀번호를 입력해주세요'}
                value={auth.user.password}
                change={auth.changeInput}
                size={30}
                warn={(!auth.isPassword && '공백을 제외한 영어 대/소문자, 숫자를 4~30자 사이로 입력하여야 합니다') || (!auth.pass && '아이디 또는 비밀번호가 일치하지 않습니다') }
                isPassword
            />

            <S.ButtonContainer>
                <S.FormButton2 onClick={auth.signIn}>
                    <S.ButtonText>로그인</S.ButtonText>
                </S.FormButton2>
                <S.Text onClick={goForgotPassword}>비밀번호 찾기</S.Text>
                <S.Text className={'color'} onClick={goSignup}>회원가입</S.Text>
            </S.ButtonContainer>
        </S.Wrapper>
    )
}
export default LoginForm;