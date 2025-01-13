import styled from "styled-components";

export const Wrapper = styled.div`
    width: 60%;
    height: 70%;
    padding: 10%;
    display: flex;
    border-radius: 5px;
    border: 1px solid #e5e5e5;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.white};
`
export const Title = styled.span`
    font-size: ${({ theme }) => theme.fontSize.large1};
    font-weight: ${({ theme }) => theme.fontWeight.large1};
    user-select: none;
`
export const Back = styled(Title)`
    cursor: pointer;
`
export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: 0.5em;
`
export const FormButton = styled.div`
    //width: 100%;
    padding: 2% 7%;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.main};
    cursor: pointer;

`
export const ButtonText = styled.span`
    font-weight: ${({ theme }) => theme.fontWeight.medium1};
    font-size: ${({ theme }) => theme.fontSize.medium1};
    color: #ffffff;
`