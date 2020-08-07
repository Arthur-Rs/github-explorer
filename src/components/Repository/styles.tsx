import styled from 'styled-components';

export const Container = styled.div` 
  border-radius: 5px;

  width: 715px;
  height: 112px;
  margin-bottom: 16px;
  margin-top: 110px;
  background: #fff;

  transition: transform 0.2s;

  & + &{
    margin-top: 0px;
  }

  &:hover{
    transform: translateX(10px)
  }

  a {
    text-decoration: none !important;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Infomations = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  img {
    height: 84px;
    border-radius: 50%;
    margin: 14px;
    margin-right: 22px;
  }

  strong{
    color: #3D3D4D;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
  }

  p{
    color: #A8A8B3;
    font-size: 18px;
    line-height: 21px;
  }
`

export const Go = styled.div`

  margin-right: 17px;
  
  img{
    height: 17px;
    width: 10px;
  }
`