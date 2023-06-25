'use client';

import styled, { css } from 'styled-components';
import { Wrapper as Button } from '../Button/styles';
export const Wrapper = styled.div<{ visible: boolean }>`
    ${({ visible }) => css`
        width:100vw;
        height: 100vh;
        position: fixed;
        z-index: 11;
        display: ${visible ? 'flex' : 'none'};
        align-items: center;
        justify-content: center;
        background-color:rgba(119, 119, 119, 0.8) ;
    `}
`;

export const Modal = styled.div`
    ${() => css`
    padding: 20px;
    position: relative ;
    width: 560px;
    max-width: 660px;
    color: #f8ecc2;
    height: 350px;
    background-color: #79896d;
    border: 1px solid #f8ecc2;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width:726px) {
        width: 80%;
    }
    `}
`;

export const SendContainer = styled.div<{ copied: boolean }>`
  ${({ copied }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    border-radius: 10px;
    background-color: ${copied ? '#65a8a6' : 'rgba(0,0,0,0.2)'};
    >${Button}{
        color: #f8ecc2 ;
        background-color: ${copied ? '#65a8a6' : 'transparent'};
        border: 1px solid #f8ecc2 ;
        &:hover{
            background-color: #65a8a6;
            border: 1px solid #65a8a6 ;
        }
    }
  `}
`;
