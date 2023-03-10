import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`

export const Main = styled.div`
  padding: 24px 123px ;
  overflow-y: auto;

  .buttonDiv{
    display: flex;
    justify-content: flex-end;
  }

  .addOrderButton{
    background-color:${({theme}) => theme.COLORS.TOMATO_400};
    width: 200px;
    margin-bottom: 125px;
  }

  @media(max-width: 600px){
    display: flex;
    flex-direction: column;
    padding: 10px 32px;

    >h1{
      font-weight: 500;
    }

  .buttonDiv{
    justify-content: center;
  }
  .addOrderButton{
    width: 100%;
    margin-bottom: 25px;
  }
  }
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;

  .inputLine{
    display: flex;
    flex-direction: row;
    gap: 32px;
    margin-top: 32px;
  }

  .input-wrapper, .input-wrapper-minor {
    display: flex;
    flex-direction: column;

    >input, select {
      background: ${({theme}) => theme.COLORS.DARK_800};
      border: none;
      border-radius: 8px;
      color: ${({theme}) => theme.COLORS.LIGHT_500};
      outline: none;
      
      padding: 12px 12px;
      height: 50px;
      margin-top: 8px;

      font-family: 'Roboto';
      font-weight: 400;
      font-size: 16px;
    }
  }

  .input-wrapper {
    flex-grow: 1;
  }

  .input-wrapper-minor{
    >input{
      width: 233px;
    }
  }

  .inputLineDescription{
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 32px;
    margin-bottom: 24px;
    
    >textarea {
      background: transparent;
      border: none;
      background: ${({theme}) => theme.COLORS.DARK_800};
      border-radius: 8px;
      color: ${({theme}) => theme.COLORS.LIGHT_500};
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 16px;
      height: 172px;
      line-height: 100%;
      outline: none;
      padding: 14px;
      resize: none; 
    }
  }
  
  .plateIngredients{
    border: none;
    background: ${({theme}) => theme.COLORS.DARK_800};
    border-radius: 8px;

    display: flex;
    align-items: center;

    margin-top: 8px;
    padding: 3px 8px 8px 8px;
    min-height: 50px;
    width: auto;
    //max-width: 472px;
    flex-wrap: wrap;
  }

  #plateImage{
    border: none;
    background: ${({theme}) => theme.COLORS.DARK_800};
    border-radius: 8px;
  
    display: flex;
    height: 50px;
    margin-top: 8px;

    font-family: 'Poppins';
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    padding: 12px 32px;

    #plateImageInput {
      display: none;
      cursor: pointer;
    }

    label{
      display: flex;
      align-items: center;
      gap: 8px;
    }

    > label, svg{
      cursor: pointer;
    }
  }
  @media(max-width: 600px){
    .inputLine{
      flex-direction: column;
    }
    .input-wrapper-minor{
      >input{
        width: 100%;
      }
    }
  }
`

export const LinkPage = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 32px;

  color: ${({theme}) => theme.COLORS.LIGHT_100};
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 18px;

  >svg{
    width: 22px;
    height: 22px;
  }
`