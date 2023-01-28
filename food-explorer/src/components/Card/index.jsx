import { Button } from "../Button";
import { Container, Main, Quantity } from "./styles";

import { FiPlus, FiMinus, FiHeart, FiChevronRight } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { useState } from "react";

export function Card({ plateLink, plate, imgSrc, platePrice, plateDescription, favPlate }){
  const [ numPlates, setNumPlates ] = useState(1);

  const increaseNumPlates = () => {
    setNumPlates(numPlates + 1);
  }

  const decreaseNumPlates = () => {
    if (numPlates >= 2){
      setNumPlates(numPlates - 1);
    } else {
      setNumPlates(1);
    }

  }

  return(
    <Container>
      <div className="favorite">
        <button>
          { !favPlate ? (<FiHeart size={30} />) : (<FiHeart size={30} style={{fill: 'white'}}/>)}
          
        </button>
      </div>
      <Main>
        <img src={imgSrc}/>
        <div className="title">
          <Link to={`/plateReview/${plateLink}`}>{plate} </Link >
          <FiChevronRight size={16} strokeWidth= {5}/>
        </div>
        <p>{plateDescription}</p>
        <h2>{platePrice}</h2>

        <div className="includeItem">
          <Quantity>
            <button type="button" onClick={decreaseNumPlates}><FiMinus size={20}/></button>

            <text>{numPlates}</text>
            <button type="button" onClick={increaseNumPlates}><FiPlus size={20}/></button>

          </Quantity>
          <Button text='incluir' />
        </div>
      </Main>
    </Container>
  )
}