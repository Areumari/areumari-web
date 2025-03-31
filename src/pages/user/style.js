import styled from "styled-components";
export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background-color: ${props => props.theme.colors.light};
`