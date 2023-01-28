import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
  border-radius: 10px;
  display: flex;
  padding: 12px 14px;
  gap: 14px;
  width: 410px;

  >input{
    background-color: transparent;
    border: none ;
    color: ${({theme}) => theme.COLORS.GREY_300};
    width: 100%;
    outline: none;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px ${({theme}) => theme.COLORS.BACKGROUND_700} inset;
    -webkit-text-fill-color: ${({theme}) => theme.COLORS.GREY_300} !important;
    caret-color: white;
  }

`