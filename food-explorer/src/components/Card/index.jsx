import { Button } from "../Button";
import { Container, Main, Quantity } from "./styles";

import { FiPlus, FiMinus, FiHeart, FiChevronRight } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { useState } from "react";
import EditIcon from '../../assets/edit-icon.svg'

import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"

export function Card({ plateLink, plate, imgSrc, platePrice, plateDescription, favPlate, setNumOfPlates, plateCategory, plateId, plateIngredients }){
  const { user } = useAuth();
  const navigate = useNavigate();
  const [ numOfSamePlates, setNumOfSamePlates ] = useState(1);

  const increaseNumOfSamePlates = () => {
    setNumOfSamePlates(numOfSamePlates + 1);
  }

  const decreaseNumOfSamePlates = () => {
    if (numOfSamePlates >= 2){
      setNumOfSamePlates(numOfSamePlates - 1);
    } else {
      setNumOfSamePlates(1);
    }
  }

  const handlenumOfTotalPlates = () => {
    return numOfSamePlates
  }

  return(
    <Container>
      <div className="favorite">
        <button >
          {user.isAdmin ? (
            <img 
              src={EditIcon} 
              onClick={() => {navigate("/plateEdit", { 
                state: { 
                  plate, 
                  imgSrc, 
                  platePrice, 
                  plateDescription, 
                  plateCategory, 
                  plateId, 
                  plateIngredients} 
              }
              )}}
            />
          ) : (
            !favPlate ? (<FiHeart size={30} />) : (<FiHeart size={30} style={{fill: 'white'}}/>)
          )}
        </button>
      </div>
      <Main>
        
        {user.isAdmin ? (
          <img className='imgAdm' src={imgSrc}/>
        ):(
          <img className='imgUser' src={imgSrc}/>
        )}
        
        <div className="title">
          <Link to={`/plateReview/${plateLink}`} state={{plateId}}>{plate}</Link >
          <FiChevronRight size={16} strokeWidth= {5}/>
        </div>
        <p>{plateDescription}</p>
        <h2> R$ {platePrice}</h2>

        {user.isAdmin ? (
          <></>
        ) : (
          <div className="includeItem">
            <Quantity>
              <button type="button" onClick={decreaseNumOfSamePlates}><FiMinus size={20}/></button>
              <span>{numOfSamePlates}</span>
              <button type="button" onClick={increaseNumOfSamePlates}><FiPlus size={20}/></button>
            </Quantity>
            <Button className="includePlateButton" text='incluir' onClick={()=>setNumOfPlates(handlenumOfTotalPlates)}/>
          </div>
        )}

      </Main>
    </Container>
  )
}