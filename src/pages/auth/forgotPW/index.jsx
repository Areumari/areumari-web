import React from "react";
import * as S from "./style";
import ForgotPWForm from "src/components/auth/forgotPWForm";

const ForgotPW = () => {
    return (
        <S.Wrapper>
            <S.FormContainer>
                <ForgotPWForm />
            </S.FormContainer>
        </S.Wrapper>
    )
}
export default ForgotPW;