import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;

`
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 56px 28px 24px 28px;
  background-color: ${({theme}) => theme.COLORS.DARK_700};
  
  >h1{
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 22px;
    line-height: 25px;
  }
  >a{
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    >svg{
      width: 28px;
      height: 28px;
      margin-right: 16px;
    }
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 150px 28px;
  justify-content: center;
  width: 100%;
  position: fixed;
  z-index: -1;

  .inputSearch{
    max-width: 100vw;
    >div{
      margin-left: 0;
    }
  }
`
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
`

export const LinkButton = styled(Link)`
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 140%;
  padding: 10px;
  border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000};
`
