import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
`
export const Title = styled.span`
    font-size: ${({ theme }) => theme.fontSize.medium1};
    font-weight: ${({ theme }) => theme.fontWeight.medium1};
`
export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.main};
`
export const TextInput = styled.input`
    width: 85%;
    font-family: Pretendard, sans-serif;
    font-size: ${({ theme }) => theme.fontSize.medium1};
    font-weight: ${({ theme }) => theme.fontWeight.medium1};
    &:invalid {
        box-shadow: none;
        outline: none;
    }
    &:focus {
        outline: none;
    }
    border: none;
    
`
export const ShowPassword = styled.span`
    font-size: ${({ theme }) => theme.fontSize.medium1};
    cursor: pointer;
    user-select: none;
`
export const Verify = styled.span`
    padding: 1% 2%;
    border-radius: 5px;
    font-size: ${({ theme }) => theme.fontSize.mediumSmall1};
    font-weight: ${({ theme }) => theme.fontWeight.mediumSmall1};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.main};
    cursor: pointer;
`
export const Warn = styled.span`
    font-size: ${({ theme }) => theme.fontSize.small1};
    color: indianred;
`