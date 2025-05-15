import styled from 'styled-components';

export const Frame = styled.a`
    //background-color: ${props => props.theme.colors.white};
    height: 10%;
    //width: 10%;
    position: fixed;
    //border: black solid 1px;
    margin-top: 48%;
    margin-left: 75%;
    text-decoration-line: none;
    color: black;
`
export const Part1 = styled.div`
    //border: 1px solid black;
    height: 60px;
    width: 60px;
    border-radius: 30px;
    position: absolute;
    margin-left: 80px;
    background-color: ${props => props.theme.colors.main};
    box-shadow: 0 4px 4px 0 rgba(0,0,0,0.3);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Part2 = styled.div`
    //border: 1px solid black;
    height: 45px;
    width: 125px;
    //margin-left: 25px;
    margin-top: 7.5px;
    border-radius: 20px;
    background-color: ${props => props.theme.colors.white};
    box-shadow: 0 4px 4px 0 rgba(0,0,0,0.3);
    border: 0.2px solid rgba(0,0,0,0.1);
    
`
export const Part3 = styled.p`
    //text-align: center;
    margin: auto;
    margin-top: 10%;
    margin-left: 17px;
    
`

export const Icon = styled.img`
    width: 60%;
    margin-left: -5px;

`
