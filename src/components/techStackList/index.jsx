import React from 'react';
import * as S from './style';
import Vector from "src/assets/images/Vector.png";
import img from "src/assets/images/maki_arrow.png";
import TechStack from "src/components/techStack";
import {useNavigate} from "react-router-dom";

const TechStackList = ({isStatic=false}) => {
    const navigate = useNavigate();
    let Content = [{value:'방.',img:'/'},{value:'방.',img:'/'},{value:'방.',img:'/'},{value:'방.',img:'/'},{value:'방.',img:'/'},{value:'방.',img:'/'},{value:'방.',img:'/'}]
    if (isStatic){
        Content = Content.slice(0,6)
    }
    return (
        <S.Wrapper>
            <S.Head>
                <S.TitleContainer>
                    <S.Vector src={Vector || null}></S.Vector>
                    <S.Text>{isStatic ? '많이 쓰는 기술 스택':'기술 스택'}</S.Text>
                </S.TitleContainer>

                {isStatic && <S.Arrow src={img || null} alt='->' onClick={() => navigate('/techStacks')}></S.Arrow>}
            </S.Head>
            <S.ListContainer>
                {Content.map((item, index) => (
                    <TechStack key={index} item={item} />
                ))}
            </S.ListContainer>
        </S.Wrapper>
    )
}
export default TechStackList;