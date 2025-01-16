import styled from "styled-components";

export const Wrapper = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.colors.light};
    overflow: hidden;
`
export const TitleContainer = styled.div`
    height: 50px;
    padding: 1em;
    border-top: 1px solid ${props => props.theme.colors.light};
`
export const Title = styled.span`
    font-size: ${({ theme }) => theme.fontSize.medium1};
    font-weight: ${({ theme }) => theme.fontWeight.medium1};
`
export const Img = styled.img`
    height: 150px;
    background-color: ${props => props.theme.colors.gray};
`