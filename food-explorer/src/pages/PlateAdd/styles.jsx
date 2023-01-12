import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`

export const Main = styled.div`
  padding: 24px 123px ;
  overflow-y: auto;

  > div{
    display: flex;
    justify-content: flex-end;
  }

  .addOrderButton{
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid ${({theme}) => theme.COLORS.WHITE};
    width: 357px;
    margin-bottom: 125px;
  }
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;

  .inputLine{
    display: flex;
    flex-direction: row;
    gap: 32px;
    margin-top: 32px;
  }

  .input-wrapper, .input-wrapper-minor {
    display: flex;
    flex-direction: column;

    >input {
      background: transparent;
      border: 1px solid ${({theme}) => theme.COLORS.WHITE};
      border-radius: 5px;
      color: ${({theme}) => theme.COLORS.GREY_300};
      outline: none;
      
      padding: 12px 12px;
      height: 50px;
      margin-top: 8px;

      font-family: 'Roboto';
      font-weight: 400;
      font-size: 16px;

    }
  }

  .input-wrapper {
    flex-grow: 1;
  }

  .input-wrapper-minor{
    >input{
      width: 233px;
    }
  }

  .inputLineDescription{
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 32px;
    margin-bottom: 24px;
    
    >textarea {
      background: transparent;
      border: 1px solid ${({theme}) => theme.COLORS.WHITE};
      border-radius: 5px;
      color: ${({theme}) => theme.COLORS.GREY_300};
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 16px;
      height: 172px;
      line-height: 100%;
      outline: none;
      padding: 14px;
      resize: none; 
    }
  }
  
  .plateIngredients{
    border: 1px solid ${({theme}) => theme.COLORS.WHITE};
    border-radius: 5px;

    display: flex;
    align-items: center;

    margin-top: 8px;
    padding: 3px 8px 8px 8px;
    min-height: 50px;
    max-width: 472px;
    flex-wrap: wrap;
  }

  #plateImage{
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    gap: 8px;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    padding: 12px 32px;
    height: 50px;
    margin-top: 8px;

    > input{
      display: none;
    }
  }
`