import styled from 'styled-components';
import { shade } from 'polished'

export const Container = styled.main`
  h1{
    font-size: 48px;
    color: #3a3a3a;

    margin-top: 80px;
    max-width: 450px;
    line-height: 56px;
  }
`

export const Form = styled.form`

  margin-top: 40px;
  display: flex;

  input,button{
    height: 72px;
    border: none;
  }

  input{
    flex: 1;
    width: 504px;
    color: #3a3a3a;
    font-size: 20px;
    padding: 25px 30px;
    border-radius: 5px 0px 0px 5px; 

    &::placeholder{
      color: #a8a8b3;
    }
  }

  button{
    width: 210px;
    background: #04D361;
    color: #FFFFFF;
    border-radius: 0px 5px 5px 0px; 

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;
    font-size: 18px;

    transition: background-color 0.2s; 

    &:hover{
      background: ${shade(0.2, '#04D361')};
    }
  }

`
export const Error = styled.span`
  display: block;
  margin-top: 8px;
  color: #c53030
`