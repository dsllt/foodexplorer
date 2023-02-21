import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto 105px;
  grid-template-areas: "header" "content" "footer";

  @media(max-width: 600px){
    max-width: 600px;
    display: flex;
    flex-direction: column;
  }
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

  @media(max-width: 600px){
    padding: 24px 0 24px 24px;
  }
`

export const Title = styled.div`
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  border-radius: 8px; 
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 64px;
  height: 260px;
  max-width: 1120px;

   .titleText{
      display: flex;
      flex-direction: column;
      padding-right: 100px;
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

  .mobilePicture{
      display: none;
  }
 
  .screenPicture{
    bottom: 60px;
    height: 412.56px;
    margin: -150px -70px;
    position: relative;
    width: 656.17px;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }

  @media(max-width: 600px){
    align-items: center;
    width: 90vw;
    height: 120px;
    margin-top: 44px;
   .titleText{
      padding: 0;
      width: 220px;
      > h1{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
       }
       > h2{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
       }
     }
     .mobilePicture{
        display: block;
        width: 191px;
        height: 149px;
        margin: 0 -45px 30px;
        position: relative;
        transform: matrix(1, 0, 0, 1, 0, 0);
     }
     .screenPicture{
      display: none;
     }
  }
`