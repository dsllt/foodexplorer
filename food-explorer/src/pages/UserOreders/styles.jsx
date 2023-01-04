import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`

export const Main = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 34px 123px;
    gap: 34px;
    
`

export const Orders = styled.table`
  border-spacing: 0;
  
  > tbody td, thead th{
    border: 2px solid;
    border-color: ${({theme}) => theme.COLORS.TABLE_BORDER}
  }

  >thead th:first-child{
    border-top-left-radius: 8px;
  }
  >thead th:last-child{
    border-top-right-radius: 8px;
  }

  >thead tr th, tbody tr td{
    font-family: 'Roboto';
    font-size: 14px;
    line-height: 160%;
    text-align: left;
  }

  >thead tr th{
    color: ${({theme}) => theme.COLORS.GREY_100};
    font-weight: 700;
    padding: 21px 24px;
  }

  >tbody tr td{
    color: ${({theme}) => theme.COLORS.GREY_200};
    font-weight: 400;
    padding: 16px 24px;
  }

  >tbody tr td div{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  #pendente{
    font-size: 30px;
    color: ${({theme}) => theme.COLORS.RED};
  }

  #entregue{
    font-size: 30px;
    color: ${({theme}) => theme.COLORS.GREEN};
  }

  #preparando{
    font-size: 30px;
    color: ${({theme}) => theme.COLORS.YELLOW};
  }
    
`