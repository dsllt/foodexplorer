import {  useReducer } from "react";
import { Slides, Slide, Carrousel, Main } from "./styles";

const initialState ={
  slideIndex: 0
}

export function Hover({slides}){
  function slidesReducer(state, event) {
    if (event.type === "PREV") {
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % slides.length
      };
    }
    if (event.type === "NEXT") {
      return {
        ...state,
        slideIndex:
          state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
      };
    }
  };

  const [state, dispatch] = useReducer(slidesReducer, initialState);
  
  return (
    <Main>
        <button className="leftBtn" onClick={() => dispatch({ type: "PREV" })}> {'<'} </button>
      <Carrousel>
        <Slides>
          {[...slides, ...slides, ...slides].map((slide, i) => {
            let offset = slides.length + (state.slideIndex - i);
            const active = offset === 0 ? true : null;
            return (
              <Slide 
              style={{'--offset': offset,'--dir': offset === 0 ? 0 : (offset > 0 ? 1 : -1)}} 
              data-active={active} key={i}
            > 
              {slide}
            </Slide>
            )
          })}
        </Slides>
      </Carrousel>
        <button className="rightBtn" onClick={() => dispatch({ type: "NEXT" })}>{'>'} </button>

    </Main>
  )
}