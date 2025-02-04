import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: ${props => props.theme.colors.white};
`
export const HeaderContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    box-sizing: border-box;
    box-shadow: 0 4px 4px rgba(0,0,0,0.1);
    align-items: center;
    justify-content: space-evenly;
`
export const Logo = styled.img`
    width: 187.17px;
    height: 48px;
`

export const SearchButton = styled.img`
    width: 32px;
    height: 32px;
`

export const NavContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 5%;
`
export const Nav = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
    font-weight: ${({ theme }) => theme.fontWeight.medium1};
    &.active {
        color: ${({ theme }) => theme.colors.main};
        border-bottom: 2px solid ${({ theme }) => theme.colors.main};
        font-weight: ${({ theme}) => theme.fontWeight.medium2};
    }
`
export const NavText = styled.span`
    font-size: ${({ theme }) => theme.fontSize.medium1};
`
export const MyLogo = styled.div`
    width: 63px;
    aspect-ratio: 1/1;
    border-radius: 100%;
    background-color: #6e6e6e;
`