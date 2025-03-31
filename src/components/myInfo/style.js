import styled from "styled-components";
export const Wrapper = styled.div`
    width: 70%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 4px 4px rgba(0,0,0,0.1);
`
export const PropertyContainer = styled.div`
    width: 80%;
    margin: 5% 5%;
    display: flex;
`
export const PropertyTitle = styled.span`
    width: 25%;
    font-weight: ${({ theme }) => theme.fontWeight.large1};
    font-size: ${({ theme }) => theme.fontSize.large1};
    color: ${({ theme }) => theme.colors.main};
`
export const Property = styled.span`
    font-weight: ${({ theme }) => theme.fontWeight.large1};
    font-size: ${({ theme }) => theme.fontSize.large1};
`
