import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;


  
`

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  gap: 116px;
  justify-content: flex-start;
  margin-left: 123px;
  margin-top: 34px;
`

export const Order = styled.div`
  >h1{
    margin-bottom: 32px;
  }
  >h2{
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    margin-top: 16px;
  }
  
`

export const CardPayment = styled.div`
  >h1{
      margin-bottom: 32px;
    }
`
export const MethodSelection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  .pixBox, .creditoBox{
    align-items: center;
    background: none;
    border-color: ${({theme}) => theme.COLORS.TABLE_BORDER};
    color: ${({theme}) => theme.COLORS.WHITE} ;
    display: flex;
    flex-direction: row;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    padding-top: 24px;
    padding-bottom: 24px;
    justify-content: center;
    width: 265px;
    
    >img {
      width: 24px;
      height: 24px;
    }
  }

  .pixBox{
    border-left: 1px solid ${({theme}) => theme.COLORS.TABLE_BORDER};
    border-top-left-radius: 10px;
  }
  .creditoBox{
    border-right: 1px solid ${({theme}) => theme.COLORS.TABLE_BORDER};
    border-top-right-radius: 10px;
  }

  
`

export const PaymentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 530px;
  height: 445px;

  .paymentInfo{
    border: 1px solid;
    border-color: ${({theme}) => theme.COLORS.TABLE_BORDER};
    height: 364px;
    display: flex;
    align-items: center;
    justify-content: center;


  }
`

export const CreditCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 59px 91px;

  #validade, #CVC, #cardNumber{
    background: transparent;
    border: 1px solid ${({theme}) => theme.COLORS.WHITE};
    border-radius: 5px;
    color: ${({theme}) => theme.COLORS.GREY_300};
    width: 100%;
    outline: none;
    padding: 16px 14px;
    margin-top: 8px;
  }
  
  .cardInfo{
      display: flex;
      flex-direction: row;
      gap: 10px;

      >div label{
        margin-bottom: 8px;
      }

    }
`