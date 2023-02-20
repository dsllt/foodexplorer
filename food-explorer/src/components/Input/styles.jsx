import styled from "styled-components";

export const Container = styled.div`
  @media(max-width: 600px){
    background-color: ${({theme}) => theme.COLORS.DARK_900};
    border: none;
  }

  background-color: transparent;
  border-radius: 10px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  padding: 12px 14px;
  gap: 14px;
  
  //width: 581px;
  width: 100%;
  margin-left: 32px;
  margin-right: 32px;

  >input{
    background-color: transparent;
    border: none ;
    color: ${({theme}) => theme.COLORS.LIGHT_500};
    width: 100%;
    outline: none;
    display: flex;
    align-items: center;

  }

  input:-webkit-autofill {
    box-shadow: 0 0 0 30px ${({theme}) => theme.COLORS.DARK_700} inset;
    -webkit-box-shadow: 0 0 0 30px ${({theme}) => theme.COLORS.DARK_700} inset;
    -webkit-text-fill-color: ${({theme}) => theme.COLORS.LIGHT_500} !important;
    caret-color: white;
  }

`