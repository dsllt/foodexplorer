import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  display: flex;
  font-size: 16px;
  flex-direction: row;
  justify-content: space-between;
  padding: 28px 123px;
  width: 100%;
`

export const Logo = styled.div`
  align-items: center;
  display: flex;
  font-size: 26px;
  font-weight: 700;
  gap: 12px;

  .logoImg{
    filter: invert(24%) sepia(96%) saturate(600%) hue-rotate(153deg) brightness(100%) contrast(96%);
  }
`

export const Logout = styled.button`
  background: none;
  border: none;
  >svg{
    color: ${({theme}) => theme.COLORS.WHITE};
  }
`