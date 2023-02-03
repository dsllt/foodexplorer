import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.DARK_700};
  display: flex;
  font-size: 16px;
  flex-direction: row;
  justify-content: space-between;
  padding: 28px 123px;
  width: 100%;
`

export const ContainerUser = styled.div`
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.DARK_700};
  display: flex;
  font-size: 16px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  a{
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }
`

export const Logo = styled(Link)`
  align-items: center;
  display: flex;
  font-size: 26px;
  font-weight: 700;
  color: ${({theme}) => theme.COLORS.LIGHT_100};

  .logoImg{
    filter: invert(24%) sepia(96%) saturate(600%) hue-rotate(153deg) brightness(100%) contrast(96%);
    margin-right: 12px;
  }
`
export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  >span{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: ${({theme}) => theme.COLORS.CAKE_100};
    align-self: flex-end;
  }
`

export const Logout = styled.button`
  background: none;
  border: none;
  >svg{
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }
`

export const ContainerAdm = styled.div`
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.DARK_700};
  display: flex;
  font-size: 16px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

`
