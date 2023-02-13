import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: 'Roboto', sans-serif;
        color: #fff;
        background-color: #0f0f0f;
        max-width: 1440px;
    }

    button {
        cursor: pointer;
    }
`