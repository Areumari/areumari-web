import styled from "styled-components";

export const Wrapper = styled.div`
    width: 60%;
    height: 60%;
    padding: 10%;
    display: flex;
    border-radius: 5px;
    border: 1px solid #e5e5e5;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    background-color: #ffffff;
`
export const Title = styled.span`
    font-size: 2.5vw;
    font-weight: 700;
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
`
export const FormButton = styled.div`
    width: 100%;
    padding: 2% 0;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    background-color: #3379D9;
    cursor: pointer;

`
export const ButtonText = styled.span`
    font-weight: 700;
    font-size: 1.5vw;
    color: #ffffff;
`
export const Text = styled.span`
    font-weight:500;
    color: black;
    &.color {
        color: #3379D9;
    }
    
`