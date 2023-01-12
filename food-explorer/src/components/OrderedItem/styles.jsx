import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 13px;
  margin-top: 32px;

  >img{
    width: 72px;
    height: 72px;
  }

  .leftContainers{
    >text{
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 20px;
      line-height: 160%;
      
      >span{
        margin-left: 10px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 12px;
        line-height: 160%;
      }
    }
      >button{
        color: ${({theme}) => theme.COLORS.RED_LIGHT};
      }
  }

`