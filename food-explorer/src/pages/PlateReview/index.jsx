import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { api } from '../../services/api'
import { useAuth } from "../../hooks/auth"
import { Container, Description, Ingredients, Main, Sale, LinkPage, Quantity } from "./styles";
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Ingredient } from '../../components/Ingredient'
import { Button } from '../../components/Button';
import { FiPlus, FiMinus, FiChevronLeft } from 'react-icons/fi'
import { useNavigate } from "react-router-dom"

export function PlateReview(){
  const { user, meals, ingredients } = useAuth();
  const location = useLocation()
  const navigate = useNavigate();
  const { plateId } = location.state

  const [ numOfSamePlates, setNumOfSamePlates ] = useState(1);
  const [ numTotalOfPlates, setNumTotalOfPlates ] = useState(0);
  const [ numOfPlates, setNumOfPlates ] = useState(0);

  const currentMeal = meals.find( meal => meal.id === plateId )

  const plate = currentMeal.name;
  const platePrice = currentMeal.price
  const plateDescription = currentMeal.description
  const plateCategory = currentMeal.category
  const currentIngredients = []
  ingredients.map(ingredient => {
    if(ingredient.mealId === plateId){
      currentIngredients.push(ingredient.name)
    }
  })
  const imgSrc = `${api.defaults.baseURL}/files/${currentMeal.image}`

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

  useEffect(()=>{
    setNumTotalOfPlates(numOfPlates)
  },[numOfPlates]);

  return(
    <Container>
      <Header numOfPlates={numTotalOfPlates}/>
      <LinkPage to={'/'} >
        <FiChevronLeft /> voltar
      </LinkPage>
      <Main>
        <img src={imgSrc}/>
        <Description>
          <h1>{currentMeal.name}</h1>
          <p>{currentMeal.description}</p>
          <Ingredients>
              {currentIngredients.map((ingredient, index) => {
                return(
                  <Ingredient key={index} text={ingredient}/>
                )
              })}
          </Ingredients>
          {user.isAdmin ? (
            <Button 
              className="admButton" 
              text='editar prato' 
              onClick={() => {
                navigate("/plateEdit", { 
                  state: { 
                    plate, 
                    imgSrc, 
                    platePrice, 
                    plateDescription, 
                    plateCategory, 
                    plateId, 
                    plateIngredients: currentIngredients
                  } 
              })
              }}
            />
          ) : (
            <Sale>
              <div className="includeItem">
                <Quantity>
                  <button type="button" onClick={decreaseNumOfSamePlates}><FiMinus size={20}/></button>
                  <span>{numOfSamePlates}</span>
                  <button type="button" onClick={increaseNumOfSamePlates}><FiPlus size={20}/></button>
                </Quantity>
              </div>
                <Button text={`incluir ∙ ${currentMeal.price}`} onClick={()=>setNumOfPlates(handlenumOfTotalPlates)}/>
            </Sale>
          )}
        </Description>
      </Main>
      <Footer />
    </Container>
  )
}