import React from "react";
import * as S from "./style";
import SignupForm from "src/components/auth/signupForm";

const Login = () => {
    return (
        <S.Wrapper>
            <S.FormContainer>
                <SignupForm/>
            </S.FormContainer>
        </S.Wrapper>
    )
}
export default Login;