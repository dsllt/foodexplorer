import styled from "styled-components";

export const Container = styled.button`
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.TOMATO_200};
  border: none;
  border-radius: 5px;
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  display: flex;
  gap: 8px;
  line-height: 24px;
  justify-content: center;
  padding: 12px 33px;

  >text {
    font: ${({theme}) => theme.FONTS.POPPINGS_100_MEDIUM};
  }

  >img{
    height: 32px;
    width: 32px;
  }
`