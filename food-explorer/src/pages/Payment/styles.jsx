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
  justify-content: center;
  margin: 34px 120px;
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

export const PaymentMainBox = styled.div`
  >h1{
      margin-bottom: 32px;
    }
`

export const PaymentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 530px;
  height: 462px;
`

export const MethodSelection = styled.div`
  display: flex;
  flex-direction: row;

  .pixBox, .creditoBox{
    align-items: center;
    background: none;
    border-color: ${({theme}) => theme.COLORS.DARK_1000};
    color: ${({theme}) => theme.COLORS.LIGHT_100} ;
    display: flex;
    flex-direction: row;
    font-family: 'Roboto';
    font-size: 16px;
    padding: 24px 0px;
    justify-content: center;
    width: 265px;
    
    >img {
      width: 24px;
      height: 24px;  
      margin-right: 14px;
    }
  }

  .pixBox{
    border-left: 1px solid ${({theme}) => theme.COLORS.DARK_1000};
    border-top-left-radius: 10px;
  }
  .creditoBox{
    border-right: 1px solid ${({theme}) => theme.COLORS.DARK_1000};
    border-top-right-radius: 10px;
  }
`

export const PaymentInfo = styled.div`
  align-items: center;
  border: 1px solid;
  border-color: ${({theme}) => theme.COLORS.DARK_1000};
  display: flex;
  justify-content: center;
  padding: 71px 0;
`

export const CreditCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  gap: 37px;

  #validade, #CVC, #cardNumber{
    background: transparent;
    border: 1px solid ${({theme}) => theme.COLORS.LIGHT_100};
    border-radius: 5px;
    color: ${({theme}) => theme.COLORS.LIGHT_500};
    width: 100%;
    outline: none;
    padding: 16px 14px;
    margin-top: 8px;
  }
`

export const CardNumber = styled.div`

`

export const CardValidityCVC = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  #validade, #CVC {
    width: 166px;
  }
`
export const CashierPayment = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: 37px;

  >img{
    width: 104px;
    height: 104px;
  }

  >h2{
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }
`

export const ApprovedPayment = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: 37px;

  >img{
    width: 104px;
    height: 104px;
  }
  
  >h2{
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }
`

export const DeliveredOrder = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: 37px;

  >img{
    width: 104px;
    height: 104px;
  }
  
  >h2{
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }
`