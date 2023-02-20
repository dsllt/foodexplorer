import { Link } from "react-router-dom";
import { Container as InputContainer } from '../Input/styles';
import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 600px){
    padding: 56px 28px 24px 28px;
  justify-content: center;
  }
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

  .myOrderButton{
    width: 216px;
    white-space: nowrap;
  }
`

export const LeftLinks = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;

  .logoLinkHome{
    font-size: 26px;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    white-space: nowrap;
    margin: 0;
    display: flex;
    align-items: center;

    >img{
    filter: invert(24%) sepia(96%) saturate(600%) hue-rotate(153deg) brightness(100%) contrast(96%);
    margin-right: 12px;
    }
  }

  .userFavorites{
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    margin: 0;
    margin-left: 32px;

    white-space: nowrap;
  }

  
`
export const LogoText = styled.div`
  @media(max-width: 600px){
    flex-direction: row;
    gap: 8px;
    align-items: center;
    .logoLinkHome{
      >span{
        font-size: 22px;
        line-height: 25px;
      }
    }
    .admTag{
      align-self: center;
    }
  }

  display: flex;
  flex-direction: column;

  .logoLinkHome{  
    font-size: 26px;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    white-space: nowrap;
    margin: 0;
    display: flex;
    align-items: center;
    >img{
      filter: invert(24%) sepia(96%) saturate(600%) hue-rotate(153deg) brightness(100%) contrast(96%);
      margin-right: 12px;
    }
  }
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
  @media (max-width: 600px){
    display: none;
  }
  background: none;
  border: none;
  margin-left: 32px;
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
  justify-content: flex-start;

  .newPlateButton{
    width: 216px;
  }
  >svg{
    display: none;
  }

  @media (max-width: 600px){
    width: 100vw;
    ${InputContainer}{
        display: none;
    }
    .newPlateButton{
      display: none;
    }
    >svg{
      display: block;
      width: 24px;
      height: 18px;
      margin-right: 84px;
    }
  }

`
