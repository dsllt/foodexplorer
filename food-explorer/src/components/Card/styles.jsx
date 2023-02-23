import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme}) => theme.COLORS.DARK_100};
  border-radius: 8px;
  height: 462px;
  width: 304px;

  .favorite{
      >button{
        background: none;
        border: none;
        margin: 20px 250px;
        color: ${({theme}) => theme.COLORS.LIGHT_100};

        position: fixed;
      }
  }

  @media(max-width: 600px){
    width: 210px;
    height: 292px;
    .favorite{
      >button{
        margin: 20px 160px;
      }
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
  padding-top: 24px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;

  >p{
    font-size: 14px;
    line-height: 160%;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }

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
      font-weight: 700;
      font-size: 24px;
      line-height: 140%;
      color: ${({theme}) => theme.COLORS.LIGHT_100};
    }
  }

  >span{
    font-size: 14px;
    line-height: 160%;
    width: 220px;
  }

  >h2{ 
      color: ${({theme}) => theme.COLORS.CAKE_100};
    }

  .includeItem{
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
  @media (max-width: 600px) {
    .imgUser, .imgAdm{
      width: 88px;
      height: 88px;   
    }
    .imgAdm{
      margin-top: 70px;
    }
    .imgUser{
      margin-top: 0px;
    }
    >h2{
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      color: ${({theme}) => theme.COLORS.CAKE_100};
    }
    >p{
      display: none;
    }
    .title{
      >a{
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
      }
    }
    .includeItem{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .includePlateButton{
        width: 162px;
        height: 32px;
      }
    }
  }
`

export const Quantity = styled.div`
  align-items: center;
  display: flex;
  gap: 14px;

  >button{
    background: none;
    border: none;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }

  @media(max-width: 600px){
    justify-content: center;
  }
  
`