import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    border-bottom: black solid 1px;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 2%;
    padding-bottom: 2%;
`
export const Logo = styled.img`
`
export const NavContainer = styled.div`
    width: 50%;
    display: flex;
    gap: 5%;
`
export const Nav = styled.div`
    user-select: none;
    cursor: pointer;
`
export const NavText = styled.span`
    font-size: 20px;
    font-family: Pretendard, sans-serif;
    font-weight: 500;
`
export const MyLogo = styled.div`
    width: 63px;
    aspect-ratio: 1/1;
    border-radius: 100%;
    background-color: #6e6e6e;
`