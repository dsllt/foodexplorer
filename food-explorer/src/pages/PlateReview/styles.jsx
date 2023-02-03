import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    a{
      color: ${({theme}) => theme.COLORS.LIGHT_100};

      
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      justify-content: flex-start;
      margin-top: 24px;
      margin-left: 122px;
    }
    > button{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        justify-content: flex-start;
        margin-left: 122px;
        margin-top: 24px;
    }
`

export const Main = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 41px;
    justify-content: center;
    margin-top: 41px;
    margin-bottom: 156px;

    >img{
        width: 390px;
        height: 390px;
    }
`

export const Description = styled.div`
    >h1{
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 40px;
        line-height: 140%;
        margin-bottom: 8px;
    }
    >p{
        font-family: 'Poppins';
        font-weight: 400;
        font-size: 24px;
        line-height: 140%;
        width: 600px;
    }

`

export const Ingredients = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
`

export const Sale = styled.div`
    align-items: center;
    display: flex;
    gap: 14px;
    >h2{
        font-weight: 400;
        font-size: 32px;
        line-height: 160%;
        color: ${({theme}) => theme.COLORS.CAKE_100};
        margin-right: 52px;
    }

    .includeItem{
        display: flex;
        flex-direction: row;
        gap: 16px;
        margin-right: 24px;
        >button{
            background: none;
            border: none;
            color: ${({theme}) => theme.COLORS.LIGHT_100};
        }

    }

    >Button{
        padding: 12px 4px;
    }
`