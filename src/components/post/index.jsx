import React from 'react';
import * as S from './style';

const Post = ({data}) => {

    return (
        <S.Wrapper>
            {data}
        </S.Wrapper>
    )
}
export default Post;