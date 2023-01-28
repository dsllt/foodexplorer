import { Button } from "../Button";
import { Container, Main, Quantity } from "./styles";

import { FiPlus, FiMinus, FiHeart, FiChevronRight } from 'react-icons/fi'
import { Link } from "react-router-dom";

export function Card({ plateLink, plate, imgSrc, platePrice, plateDescription, favPlate }){
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
            <button type="button"><FiMinus size={20}/></button>

            <text>01</text>
            <button type="button"><FiPlus size={20}/></button>

          </Quantity>
          <Button text='incluir' />
        </div>
      </Main>
    </Container>
  )
}