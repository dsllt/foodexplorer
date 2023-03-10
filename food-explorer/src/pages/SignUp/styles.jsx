import styled from 'styled-components';

export const Container = styled.div`
  @media(max-width: 600px){
    flex-direction: column; 
    gap: 0;
    margin: auto;
  }

  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 306px;
  justify-content: center;
  height: 100vh;
`

export const Logo = styled.div`
  @media(max-width: 600px){
    font-size: 36px;
    line-height: 44px;

    .logoImg{
      width: 43px;
      height: 43px;
    }
  }

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
  @media(max-width: 600px){
    background-color: transparent;
    padding: 50px;
    width: 100vw;

    .formBoxTitle{
      display: none;
    }
  }
  
  background-color: ${({theme}) => theme.COLORS.DARK_700};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding: 64px;

  >label{
    align-self: flex-start;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
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

  >a {
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    margin-top: 32px;

    font-family: 'Poppins';
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }
`