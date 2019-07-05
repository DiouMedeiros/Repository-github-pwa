import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Source Sans Pro', sans-serif;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        background: #f5f5f5;
    }
`;

export const Header = styled.header`
    width: 100%;
    background: #7159c1;
    font-size: 18px;
    color: #FFF;
    font-weight: 600;
    display: flex;
    align-items: center;
    padding: 10px 20px;

    position: fixed;
    top: 0;
    left: 0;

    button {
        background: transparent;
        border: 0;
        font-weight: 600;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
    }

    input {
        flex: 1;
        border: 0;
        background: #fff;
        color: #333;
        height: 32px;
        font-size: 14px;
        border-radius: 4px;
        padding: 0 10px;
        margin-left: 10px;
    }
`;

export const Repositories = styled.ul`
    list-style: none;
    margin: 70px 20px 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    li {
        flex: 1;
        padding: 20px;
        display: flex;
        background: #fff;
        box-shadow: 0 0 10px 0 rgba(221, 221, 221, 0.5);
        border-radius: 4px;

        img {
            height: 60px;
            width: 60px;
            border-radius: 50%;
        }
    }
`;