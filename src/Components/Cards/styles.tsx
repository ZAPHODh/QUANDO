'use client';

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${() => css`
    background-color:#f8ecc2;
    width: 100%;
    height: 130px;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    align-items: center;
    justify-content:flex-start ;
    &::-webkit-scrollbar{
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #e65540;
    }
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
    }
    `}
`;
