import React from "react";
import * as S from "./style";
import SignupForm from "src/components/signupForm";

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