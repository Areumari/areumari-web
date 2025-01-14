import React from "react";
import * as S from "./style";
import LoginForm from "src/components/auth/loginForm";

const Login = () => {
    return (
        <S.Wrapper>
            <S.FormContainer>
                <LoginForm/>
            </S.FormContainer>
        </S.Wrapper>
    )
}
export default Login;