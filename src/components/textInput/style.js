import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
`
export const Title = styled.span`
    font-size: 1.5vw;
    font-weight: 600;
`
export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #5B94F3;
`
export const TextInput = styled.input`
    width: 100%;
    font-family: Pretendard, sans-serif;
    font-weight: 400;
    font-size: 2vw;
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
    font-size: 2vw;
    cursor: pointer;
    user-select: none;
`
export const Warn = styled.span`
    font-size: 1vw;
    color: indianred;
`