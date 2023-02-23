import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.DARK_700};
  display: flex;
  font-size: 16px;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 123px;
  width: 100%;
  @media(max-width: 600px){
    font-size: 12px;
    line-height: 16px;
    padding: 30px 28px;
    justify-content: center;
    >span{
      margin-left: 32px;
    }
  }
`

export const Logo = styled.div`
  align-items: center;
  color: ${({theme}) => theme.COLORS.LIGHT_600};
  display: flex;
  font-size: 26px;
  font-weight: 700;
  gap: 12px;

  @media(max-width: 600px){
    font-size: 16px;
    line-height: 18px;
    gap: 6px;

    >img{ 
      width: 22px;
      height: 18px;}
  }
`


