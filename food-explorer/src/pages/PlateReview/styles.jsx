import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  > a{
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;      
    justify-content: flex-start;
    margin-top: 32px;
    margin-left: 122px;
  }    
  > button{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;        
    justify-content: flex-start;
    margin-left: 122px;
    margin-top: 24px;
  }
  @media(max-width: 600px){
    
    >a{
      margin-left: 56px;
      font-weight: 500;
    }
  }
`

export const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 41px;
  justify-content: center;
  margin-top: 41px;
  margin-bottom: 156px;
  >img{
    width: 390px;
    height: 390px;
  }

  @media(max-width: 600px){
    flex-direction: column;
    margin: 50px 56px;
    margin-top: 16px;

    >img{
      width: 263px;
      height: 263px;
    }
  }
`

export const Description = styled.div`
  >h1{
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 40px;
      line-height: 140%;
      margin-bottom: 8px;
  }
  >p{
      font-family: 'Poppins';
      font-weight: 400;
      font-size: 24px;
      line-height: 140%;
      width: 600px;
  }
  @media(max-width: 600px){
    max-width: 316px;
    display: flex;
    flex-direction: column;
    align-items: center;
    >h1{
      font-size: 26px;
      margin-bottom: 24px;
    }
    >p{
      font-size: 16px;
      word-wrap: break-word;
      max-width: 316px;
      text-align: center;
    }
    .admButton{
      width: 100%;
    }
  }

`

export const Ingredients = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
`

export const Sale = styled.div`
    align-items: center;
    display: flex;
    gap: 14px;
    >h2{
        font-weight: 400;
        font-size: 32px;
        line-height: 160%;
        color: ${({theme}) => theme.COLORS.CAKE_100};
        margin-right: 52px;
    }

    .includeItem{
        display: flex;
        flex-direction: row;
        gap: 16px;
        margin-right: 24px;
        >button{
            background: none;
            border: none;
            color: ${({theme}) => theme.COLORS.LIGHT_100};
        }

    }

    >Button{
        padding: 12px 24px;
    }
`

export const LinkPage = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Quantity = styled.div`
  align-items: center;
  display: flex;
  gap: 14px;

  >button{
    background: none;
    border: none;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }
  
`