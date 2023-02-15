import { useState, useEffect } from "react"
import { Container, Main, Title } from "./styles"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import { Card } from "../../components/Card"
import { Hover } from "../../components/Hover"
import TitleImg from '../../assets/title-picture.png'

import { api } from '../../services/api'
import { useAuth } from "../../hooks/auth";

export function Home(){

  const [numOfPlates, setNumOfPlates] = useState(0);
  const [numTotalOfPlates, setNumTotalOfPlates] = useState(0);

  const { loadMeals, meals } = useAuth();
  
  function handleIncludeItem(){
    setNumTotalOfPlates(numTotalOfPlates + numTotalOfPlates)
    
    return numOfTotalPlates
  }

  useEffect(() => {
    loadMeals()
    
  }, []);

  useEffect(()=>{
    setNumTotalOfPlates(numOfPlates)
  },[numOfPlates]);
  
  return(
    <Container>
      <Header  numOfPlates={numTotalOfPlates}/>
      <Main>
        <Title>
          <img src={TitleImg}/>
          <div className="titleText">
            <h1>Sabores inigualáveis</h1>
            <h2>Sinta o cuidado do preparo com ingredientes selecionados</h2>
          </div>
        </Title>

        <Section title='Pratos principais'>
          <Hover slides={
            meals.map((meal, index) => {
              const mealImage = `${api.defaults.baseURL}/files/${meal.image}`
              const mealLink = meal.name
                .replace(/\w+/g, function(txt) {
                  return txt.charAt(0).toUpperCase() + txt.substr(1);
                })
                .replace(/ /g, '')
                .replace(/^./, function(str){ return str.toLowerCase(); })
              return (
                <Card 
                  key={index}
                  plateLink={mealLink} 
                  plate={meal.name} 
                  imgSrc={mealImage} 
                  plateDescription={meal.description}
                  platePrice={meal.price}  
                  plateCategory={ meal.category }
                  plateId={meal.id}
                  setNumOfPlates={setNumOfPlates}
                  />
              )
            })
          }/>
        </Section>

        <Section title='Sobremesas'>
          <Hover slides={
            meals.map((meal, index) => {
              const mealImage = `${api.defaults.baseURL}/files/${meal.image}`
              const mealLink = meal.name
                .replace(/\w+/g, function(txt) {
                  return txt.charAt(0).toUpperCase() + txt.substr(1);
                })
                .replace(/ /g, '')
                .replace(/^./, function(str){ return str.toLowerCase(); })
              return (
                <Card 
                    key={index}
                    plateLink={mealLink} 
                    plate={meal.name} 
                    imgSrc={mealImage} 
                    plateDescription={meal.description}
                    platePrice={meal.price}  
                    plateCategory={meal.category}
                    plateId={meal.id}
                    plateIngredients={meal.ingredients}
                    setNumOfPlates={setNumOfPlates}
                  />
              )
            })
          }/>
        </Section>
        <Section title='Bebidas'>
          <Hover slides={
            meals.map((meal, index) => {
              const mealImage = `${api.defaults.baseURL}/files/${meal.image}`
              const mealLink = meal.name
                .replace(/\w+/g, function(txt) {
                  return txt.charAt(0).toUpperCase() + txt.substr(1);
                })
                .replace(/ /g, '')
                .replace(/^./, function(str){ return str.toLowerCase(); })
              return (
                <Card 
                    key={index}
                    plateLink={mealLink} 
                    plate={meal.name} 
                    imgSrc={mealImage} 
                    plateDescription={meal.description}
                    platePrice={meal.price}  
                    setNumOfPlates={setNumOfPlates}
                  />
              )
            })
          }/>
        </Section>
      </Main>
      <Footer />
    </Container>
  )
}