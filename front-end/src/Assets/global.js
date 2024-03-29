import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,body, #root {
    height: 100%;
    background-color: #1D182C;
  }
  #root {
    display: flex;
    flex-direction: column;
  }
  #root > main {
    flex: 1;
  }
`
