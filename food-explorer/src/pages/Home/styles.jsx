import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto 105px;
  grid-template-areas: "header" "content" "footer";
  
`

export const Main = styled.div`
  grid-area: content;
  padding: 100px 123px;
  max-width: 100vw;
  overflow-y: scroll;

  .zeroRenderingCards{
    display: flex;
    align-items: center;
    justify-content: center;


    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
  }
`


export const Title = styled.div`
  align-items: center;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  border-radius: 8px;
  display: flex;
  height: 260px;
  padding: 87px 46px;
  margin-top: 64px;
  justify-content: space-between;

  .titleText{
    >h1{
      font-size: 40px;
    }
    > h2{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
    }
  }


  > img{
    bottom: 60px;
    height: 412.56px;
    margin: -150px -115px;
    position: relative;
    width: 656.17px;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
`