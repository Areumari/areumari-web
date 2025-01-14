import React from 'react';
import * as S from '../style'
import TextInput from "src/components/textInput";
import {useAuth} from "src/hooks/useAuth";
import {useNavigate} from "react-router-dom";

const ForgotPWForm = () => {
    const {...auth} = useAuth()
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    return (
        <S.Wrapper>
            <S.Back onClick={goBack}>{'←'} </S.Back>
            <S.Title>비밀번호 재설정</S.Title>
            <TextInput
                title={'이메일'}
                name={'email'}
                placeholder={'이메일을 입력하세요'}
                value={auth.user.email}
                change={auth.changeInput}
                size={30}
                warn={auth.isEmail ? null : '이메일을 맞게 적어주세요'}
                verify={auth.verifyCode}
            />
            <TextInput
                title={'비밀번호'}
                name={'password'}
                placeholder={'비밀번호를 입력하세요'}
                value={auth.user.password}
                change={auth.changeInput}
                size={30}
                warn={auth.isPassword ? null : ''}
            />
            <TextInput
                title={'비밀번호 확인'}
                name={'checkPassword'}
                placeholder={'비밀번호를 입력하세요'}
                value={auth.user.checkPassword}
                change={auth.changeInput}
                size={30}
                warn={auth.isPassword ? null : ''}
            />
            <S.ButtonContainer2>
                <S.FormButton onClick={auth.changePW}>
                    <S.ButtonText>확인</S.ButtonText>
                </S.FormButton>
            </S.ButtonContainer2>
        </S.Wrapper>
    )
}
export default ForgotPWForm;