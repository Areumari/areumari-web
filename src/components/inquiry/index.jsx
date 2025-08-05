import React from "react";
import * as S from './style';
import inquiryIcon from "src/assets/images/Send.svg";

const Inquiry = () => {


    return (
        <S.Frame href='https://forms.gle/LcKz14B8xo1WhZFb8'>
            <S.Part1>
                <S.Icon src={inquiryIcon || null} alt="inqurityIcon"/>
            </S.Part1>
            <S.Part2>
                <S.Part3>문의하기</S.Part3>
            </S.Part2>
        </S.Frame>
    )
}

export default Inquiry;