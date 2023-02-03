import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme}) => theme.COLORS.DARK_900};
  border-radius: 10px;
  
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  padding: 12px 14px;
  gap: 14px;
  
  width: 581px;

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
    -webkit-box-shadow: 0 0 0 30px ${({theme}) => theme.COLORS.DARK_700} inset;
    -webkit-text-fill-color: ${({theme}) => theme.COLORS.LIGHT_500} !important;
    caret-color: white;
  }

`