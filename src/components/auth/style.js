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
    justify-content: space-between;
    gap: 0.5em;
`
export const ButtonContainer2 = styled(ButtonContainer)`
    justify-content: end;
`
export const FormButton = styled.div`
    padding: 2% 5%;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.main};
    cursor: pointer;
`
export const FormButton2 = styled(FormButton)`
    width: 100%;
    padding: 2% 0;
    
`
export const ButtonText = styled.span`
    font-weight: ${({ theme }) => theme.fontWeight.medium1};
    font-size: ${({ theme }) => theme.fontSize.medium1};
    color: #ffffff;
`
export const Text = styled.span`
    font-weight:${({ theme }) => theme.fontWeight.small1};
    font-size: ${({ theme }) => theme.fontSize.small1};
    color: ${({ theme }) => theme.colors.gray};
    cursor: pointer;
    &.color {
        color: ${({ theme }) => theme.colors.main};
    }
    
`