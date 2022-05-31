import styled, { css } from 'styled-components';

export const Container = styled.div`
${({ theme }) => css`
    position:fixed;
    top: 0;
    left:0;
    bottom:0;
    right:0;
    z-index: 5;
    width:100%;
    height:100%;
    background-color: red;
    border-bottom-color: ${theme.colors.mediumGray};
`}
`;

export const MenuContainer = styled.div`
${() => css`
`}`;

export const button = styled.button`
${() => css`
`}`;
