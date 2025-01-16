import React from 'react';
import * as S from './style';
import Vector from "src/assets/images/Vector.png";
import img from "src/assets/images/maki_arrow.png";
import TechStack from "src/components/techStack";

const TechStackList = () => {
    const Content = [{value:'방.',img:'/'},{value:'방.',img:'/'},{value:'방.',img:'/'},{value:'방.',img:'/'},{value:'방.',img:'/'},{value:'방.',img:'/'}]
    return (
        <S.Wrapper>
            <S.TitleContainer>
                <S.Vector src={Vector || null}></S.Vector>
                <S.Text>요즘 많이 쓰는 기술 스택</S.Text>
                <S.Arrow src={img || null} alt='->'></S.Arrow>
            </S.TitleContainer>
            <S.ListContainer>
                {Content.map((item, index) => (
                    <TechStack key={index} item={item} />
                ))}
            </S.ListContainer>
        </S.Wrapper>
    )
}
export default TechStackList;