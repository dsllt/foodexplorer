import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 306px;
  justify-content: center;
  margin-top: 90px;
`

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 50px;

  .logoImg{
    width: 50px;
    height: 50px;
    filter: invert(24%) sepia(96%) saturate(600%) hue-rotate(153deg) brightness(100%) contrast(96%);
  }
`
export const Form = styled.form`
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px;

  >label{
    align-self: flex-start;
    color: ${({theme}) => theme.COLORS.GREY_200};
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    margin-top: 32px;
    margin-bottom: 8px;
  }

  >Button{
    margin-top: 32px;
    width: 100%;
    justify-content: space-around;
  }

`