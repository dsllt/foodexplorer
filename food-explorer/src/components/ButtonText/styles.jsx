import styled from "styled-components";

export const Container = styled.button`
  align-items: center;
  justify-content: center;
  display: flex;
  background: none;
  border: none;
  color: ${({theme}) => theme.COLORS.WHITE};


  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`