import React from 'react';
import * as S from './style';
import Vector from "src/assets/images/Vector.png";
import img from "src/assets/images/maki_arrow.png";
import TechStack from "src/components/techStack";

const TechStackList = () => {
    const Content = [{value:"'박제가 되어 버린 천재'",img:'/'},{value:'를 아시오?',img:'/'},{value:'나는 유쾌하오.',img:'/'},{value:'이런 때',img:'/'},{value:'연애까지가',img:'/'},{value:'유쾌하오.',img:'/'}]
    return (
        <S.Wrapper>
            <S.Head>
                <S.TitleContainer>
                    <S.Vector src={Vector || null}></S.Vector>
                    <S.Text>요즘 많이 쓰는 기술 스택</S.Text>
                </S.TitleContainer>

                <S.Arrow src={img || null} alt='->'></S.Arrow>
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