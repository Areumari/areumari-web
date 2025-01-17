import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
`
export const SearchContainer = styled.div`
    height: 35%;
    padding: 5% 20%;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.white};
`
export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 2%;
    border-bottom: 1px solid ${(props) => props.theme.colors.main};
`
export const Icon = styled.img`
    
`
export const Input = styled.input`
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
export const QuickSearchContainer = styled.ul`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const QuickSearchTitle = styled.span`
    color: ${({ theme }) => theme.colors.main};
    font-size: ${({ theme }) => theme.fontSize.medium1};
    font-weight: ${({ theme }) => theme.fontWeight.medium1};
`
export const QuickSearch = styled.li`
    cursor: pointer;
`