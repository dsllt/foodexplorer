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
`

export const Logo = styled.div`
  align-items: center;
  color: ${({theme}) => theme.COLORS.LIGHT_600};
  display: flex;
  font-size: 26px;
  font-weight: 700;
  gap: 12px;


`

