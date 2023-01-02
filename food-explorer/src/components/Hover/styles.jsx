import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;

  .leftBtn{
    position: relative;
    appearance: none;
    background: transparent;
    border: none;
    color: white;
    font-size: 3rem;
    width: 2rem;
    height: 2rem;
    z-index: 5;
  }

  .rightBtn{
    position: relative;
    appearance: none;
    background: transparent;
    border: none;
    color: white;
    font-size: 3rem;
    width: 2rem;
    height: 2rem;
    z-index: 5;
  }
`

export const Carrousel = styled.div`
  width: 100vw;
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  mask-image: linear-gradient(transparent,
    black 20%,
    black 80%,
    transparent 100%);
  -webkit-mask-image: linear-gradient( to right,transparent,
    black 20%,
    black 80%,
    transparent 100%);
`

export const Slides = styled.div`
  margin: auto;
  align-items: center;
  display: grid;
`

export const Slide = styled.div`
  display: grid;
  grid-area: 1 / -1;
  transition: transform 0.5s ease-in-out;
  opacity: 0.7;
  align-content: center;
  transform: 
    perspective(1800px) 
    translateX(calc(100% * var(--offset)))
    rotateY(calc(-45deg * var(--dir)));
`