import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ErrorContainer = styled.div`
    margin: 10%;
    padding: 5%;
    border: 1px solid ${props => props.theme.colors.gray};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Title = styled.span`
    font-size: ${({ theme }) => theme.fontSize.medium1};
    font-weight: ${({ theme }) => theme.fontWeight.medium1};
    color: ${({ theme }) => theme.colors.main};
`
export const ErrorText = styled.span`
    font-size: ${({ theme }) => theme.fontSize.mediumSmall1};
    font-weight: ${({ theme }) => theme.fontWeight.mediumSmall1};
    color: ${({ theme }) => theme.colors.gray};
`