import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  border-radius: 8px;
  height: 512px;
  width: 300px;

  .favorite{
      >button{
        background: none;
        border: none;
        margin: 20px 250px;
        color: ${({theme}) => theme.COLORS.WHITE};
      }
  }

`

export const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center; 
  text-align: center;

  >img{
    width: 176px;
    height: 176px;
  }

  .title{
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 4px;
    justify-content: center;

    >a{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 140%;
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }

  >h2{
    font-weight: 400;
    font-size: 32px;
    line-height: 160%;
    color: ${({theme}) => theme.COLORS.BLUE_LIGHT};
  }

  >text{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    width: 220px;
  }

  .includeItem{
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
`

export const Quantity = styled.div`
  align-items: center;
  display: flex;
  gap: 14px;

  >button{
    background: none;
    border: none;
    color: ${({theme}) => theme.COLORS.WHITE};
  }
  
`