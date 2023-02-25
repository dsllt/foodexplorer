import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto 105px;
  grid-template-areas: "header" "content" "footer";
  
`

export const Main = styled.div`
  grid-area: content;
  padding-left: 123px;
  margin-bottom: 20px;
  max-width: 1368px;
  overflow-y: auto;  
  flex-wrap: wrap;

  .cards{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  > path{
    fill: white;
  }
`

export const LinkPage = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
`