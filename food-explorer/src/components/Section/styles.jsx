import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-top: 62px;

  >h1{
    font-size: 32px;
    margin-bottom: 40px;
  }

  .cards{
    display: flex;
    flex-direction: row;
    gap: 27px;
    width: 100%;
  }

  @media(max-width: 600px){
    >h1{
      font-weight: 500;
      font-size: 18px;
      line-height: 140%;
    }
  }
`