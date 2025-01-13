import React from 'react';
import * as S from './style'
import TextInput from "src/components/textInput";
import {useAuth} from "src/hooks/useAuth";
import {useNavigate} from "react-router-dom";

const SignupForm = () => {
    const {...auth} = useAuth()
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <S.Wrapper>
            <S.Back onClick={goBack}>{'←'} </S.Back>
            <S.Title>회원가입</S.Title>
            <TextInput
                title={'아이디'}
                name={'id'}
                placeholder={'Здравствуйте'}
                value={auth.user.id}
                change={auth.changeInput}
                size={30}
                warn={auth.pass ? null : '?'}
            />
            <TextInput
                title={'비밀번호'}
                name={'password'}
                placeholder={'**'}
                value={auth.user.password}
                change={auth.changeInput}
                size={30}
                warn={auth.isPassword ? null : '공백을 제외한 영어 대/소문자, 숫자를 4~30자 사이로 입력하여야 합니다'}
                isPassword
            />
            <TextInput
                title={'비밀번호 확인'}
                name={'checkPassword'}
                placeholder={'**'}
                value={auth.user.checkPassword}
                change={auth.changeInput}
                size={30}
                warn={auth.checkPassword ? null : '비밀번호가 같지 않습니다'}
                isPassword
            />
            <TextInput
                title={'이메일'}
                name={'email'}
                placeholder={'email'}
                value={auth.user.email}
                change={auth.changeInput}
                size={30}
                warn={auth.isEmail ? null : '이메일 형식이 아닙니다'}
            />
            <TextInput
                title={'학번'}
                name={'number'}
                placeholder={'0000'}
                value={auth.user.number}
                change={auth.changeInput}
                size={4}
                warn={auth.isNumber ? null : '학번 형식이 아닙니다'}
            />

            <S.ButtonContainer>
                <S.FormButton onClick={auth.signIn}>
                    <S.ButtonText>확인</S.ButtonText>
                </S.FormButton>
            </S.ButtonContainer>
        </S.Wrapper>
    )
}
export default SignupForm;