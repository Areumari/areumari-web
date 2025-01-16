import styled from "styled-components";

export const Wrapper = styled.div`
    width: 95%;
    display:flex;
    flex-direction: column;
    margin: 2%;
    gap: 1em;
    align-items: center;
    justify-content: center;
    background-color :#ffffff;
    box-shadow: 0 2px 2px 0 #aaaaaa;
    border-radius: 10px;
`

export const TitleContainer = styled.div`
    width: 95%;
    margin: 1em 0;
    display: flex;
    align-items:center;
    gap: 1em;
    border-radius: 10px;
`

export const Vector = styled.img`
    width: 25px;
    aspect-ratio: 1/1;
`

export const Text = styled.span`
    font-size: ${({ theme }) => theme.fontSize.medium1};
    font-weight : ${({ theme }) => theme.fontWeight.medium1};
    color: #3379d9;
`

export const Arrow = styled.img`
    cursor: pointer;
`
export const ListContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2em;
`