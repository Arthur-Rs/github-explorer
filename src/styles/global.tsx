import { createGlobalStyle } from 'styled-components'
import BackgroundImage from '../assets/background.svg'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: none;
  }

  body{
    background: #E5E5E5 url(${BackgroundImage}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font-family: Roboto, sans-serif;
  }

  button{
    cursor: pointer;
  }

  #root{
    margin: 0 auto;
    padding: 40px 20px;
    max-width: 960px;
  }
`

export default GlobalStyles