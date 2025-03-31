import React, {useEffect} from 'react';
import * as S from './style';
import {useMyInfo} from "src/hooks/useMyInfo";

const MyInfo = () => {
    const myInfo = useMyInfo();
    useEffect(()=>{
        myInfo.getMyInfo()
    },[])

    return (
        <S.Wrapper>
            <S.PropertyContainer>
                <S.PropertyTitle>
                    이름
                </S.PropertyTitle>
                <S.Property>
                    {myInfo.info.name || '불러오기에 실패했습니다'}
                </S.Property>
            </S.PropertyContainer>
            <S.PropertyContainer>
                <S.PropertyTitle>
                    학교번호
                </S.PropertyTitle>
                <S.Property>
                    {myInfo.info.snumber || '불러오기에 실패했습니다'}
                </S.Property>
            </S.PropertyContainer>
            <S.PropertyContainer>
                <S.PropertyTitle>
                    authority
                </S.PropertyTitle>
                <S.Property>
                    {myInfo.info.authority || '불러오기에 실패했습니다'}
                </S.Property>
            </S.PropertyContainer>
        </S.Wrapper>
    )
}
export default MyInfo;