import styled from "styled-components";

export const Container = styled.button`
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.RED_DARK};
  border: none;
  border-radius: 5px;
  color: ${({theme}) => theme.COLORS.WHITE};
  display: flex;
  gap: 8px;
  line-height: 24px;
  justify-content: center;
  padding: 12px 33px;

  >text {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 14px;
  }

  >img{
    height: 32px;
    width: 32px;
  }
`