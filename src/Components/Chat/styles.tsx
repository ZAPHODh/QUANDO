'use client';

import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Wrapper = styled.div`
    ${() => css`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 500px;
    background-color: #f8ecc2;
    overflow: auto;
    `}
`;
export const Message = styled.div<{ isMe: boolean }>`
    ${({ isMe }) => css`
    color: #f8ecc2;
    display: flex;
    max-width: 80%;
    align-self: ${isMe ? 'self-end' : 'self-start'};
    background-color: ${isMe ? '#65a8a6' : '#635a42b3'};
    padding: 10px;
    margin: 5px;
    flex-direction: column;
    border-radius: ${isMe ? '10px 0px 10px 0px' : '0px 10px 0px 10px'};
    word-wrap: break-word;
    white-space: pre-wrap;
    >${Title}{
        margin: 0;
        padding: 0;
    }
    `}

`;
export const Form = styled.form`
display: flex;
align-items: center;
`;
export const Button = styled.button`
color: #e65540;
background-color: transparent;
border: none;
display: flex;
align-items: center;
justify-content: center;
font-size: 40px;
&:hover{
    cursor: pointer;
    color: #e01e00;
}
`;
