import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({isNew}) => isNew ? 'transparent' : 'rgba(255, 255, 255, 0.1)'};
  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}`: 'none'};
  border-radius: 5px;
  color: ${({theme, isNew}) => isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
  display: flex;
  align-items: center;
  margin-right: 5px;
  margin-top: 5px;
  width: 120px;

  >input {
    background: none;
    border: none;
    background: transparent;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    outline: none;
    padding: 6.5px 16px;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    width: 100px;
  }

  >button{
    align-items: center;
    background: none;
    border: none;
    display: flex;
    width: 10px;
  }

  .add-button{
    svg{
      color: ${({theme}) => theme.COLORS.LIGHT_500};
    }
  }

  .delete-button{
    svg{
      color:${({theme}) => theme.COLORS.LIGHT_100};
    }
  }
`