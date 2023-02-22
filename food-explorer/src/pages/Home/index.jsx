import { useState, useEffect } from "react"
import { Container, Main, Title } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import { Card } from "../../components/Card"
import { Hover } from "../../components/Hover"
import TitleImg from '../../assets/title-picture.png'
import TitleImgMobile from '../../assets/title-picture-mobile.png'
import { api } from '../../services/api'
import { useAuth } from "../../hooks/auth";
import { NavigationMenu } from "../NavigationMenu"


export function Home(){
  const { loadMeals, meals, ingredients } = useAuth();
  
  const [ search, setSearch ] = useState('');
  const [ numOfPlates, setNumOfPlates ] = useState(0);
  const [ numTotalOfPlates, setNumTotalOfPlates ] = useState(0);
  const [ searchedMeals, setSearchedMeals ] = useState(meals);
  const [ searchedIngredientInMeals, setSearchedIngredientInMeals ] = useState([]);
  const [ numberOfMealCardsToRender , setNumberOfMealCardsToRender ] = useState(1);
  const [ numberOfDesertCardsToRender , setNumberOfDesertCardsToRender] = useState(1);
  const [ numberOfDrinkCardsToRender, setNumberOfDrinkCardsToRender] = useState(1);
  const [ openMenuMobile, setOpenMenuMobile ] = useState(false);
 

  function handleIncludeItem(){
    setNumTotalOfPlates(numTotalOfPlates + numTotalOfPlates)
    
    return numOfTotalPlates
  }

  useEffect(() => {
    function searchMeals(){
      // verrify if ingredients are included on the search and save the meals with those ingredients in searchedIngredientInMeals
      ingredients.map( ingredient => {
        const ingredientNameIsOnSearch = ingredient.name.toLowerCase().includes(search);
        if (ingredientNameIsOnSearch){
          const ingredientReferredMeal = meals.filter( meal => meal.id === ingredient.mealId)
          setSearchedIngredientInMeals( prevState => [ ...prevState, ingredientReferredMeal[0] ])
        }
      })
      // verify if meal is included in the search
      meals.map( meal => {
        const mealNameIsOnSearch = meal.name.toLowerCase().includes(search);  
        if (mealNameIsOnSearch){
          setSearchedMeals( prevState => [ ...prevState, meal ])
        }
      })
      // verify if any meal that has an ingredient included in the search is not in the searchMeal state
      searchedIngredientInMeals.map( searchedIngredient => {
        const idsOfMealsNamedAfterSearch = []
        searchedMeals.map( meal => idsOfMealsNamedAfterSearch.push(meal.id))
        const mealIdOfIngredientPlate = idsOfMealsNamedAfterSearch.includes(searchedIngredient.id)
        if (mealIdOfIngredientPlate){
          setSearchedMeals( prevState => [ ...prevState, searchedIngredient ])
        }
      })
    }
    setNumberOfMealCardsToRender(searchedMeals.filter(meal => meal.category === 'refeicao').length)
    setNumberOfDesertCardsToRender(searchedMeals.filter(meal => meal.category === 'sobremesa').length)
    setNumberOfDrinkCardsToRender(searchedMeals.filter(meal => meal.category === 'bebida').length)
    setSearchedIngredientInMeals([])
    setSearchedMeals([])
    searchMeals()
  },[search])

  useEffect(() => {
    loadMeals()
    
  }, []);

  useEffect(()=>{
    setNumTotalOfPlates(numOfPlates)
  },[numOfPlates]);

  function handleOpenMenuMobile(){
    setOpenMenuMobile(true);
  }
  function handleCloseMenuMobile(){
    setOpenMenuMobile(false);
  }
  
  return(
    <>
    {openMenuMobile ? (
      <NavigationMenu handleCloseMenuMobile={handleCloseMenuMobile} onChange={e=>setSearch(e.target.value)} />
    ):(

      <Container>
      <Header 
        numOfPlates={numTotalOfPlates} 
        onChange={e => {setSearch(e.target.value)}}
        handleOpenMenuMobile = {handleOpenMenuMobile}
      />
      <Main>
        <Title>
          <img className='screenPicture' src={TitleImg}/>
          <img className='mobilePicture' src={TitleImgMobile}/>
          <div className="titleText">
            <h1>Sabores inigualáveis</h1>
            <h2>Sinta o cuidado do preparo com ingredientes selecionados</h2>
          </div>
        </Title>

        <Section className="mainPlates" title='Pratos principais'>
          {
            numberOfMealCardsToRender != 0 ? (
              <Hover slides={
                searchedMeals
                .filter(meal => meal.category === 'refeicao')
                .map((meal, index) => {
                  const mealImage = `${api.defaults.baseURL}/files/${meal.image}`
                  const mealLink = meal.name
                    .replace(/\w+/g, function(txt) {
                      return txt.charAt(0).toUpperCase() + txt.substr(1);
                    })
                    .replace(/ /g, '')
                    .replace(/^./, function(str){ return str.toLowerCase(); })
                  return (<Card 
                      key={index}
                      plateLink={mealLink} 
                      plate={meal.name} 
                      imgSrc={mealImage} 
                      plateDescription={meal.description}
                      platePrice={meal.price}  
                      plateCategory={ meal.category}
                      plateId={meal.id}
                      setNumOfPlates={setNumOfPlates}
                      />
                  )
                })
              }/>
            ) : (
              <div className="zeroRenderingCards">
                Nenhum resultado encontrado.
              </div>
            )
          }
        </Section>

        <Section title='Sobremesas'>
        {
          numberOfDesertCardsToRender != 0 ? (
            <Hover slides={
            searchedMeals
            .filter(meal => meal.category === 'sobremesa')
            .map((meal, index) => {
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
          ) : (
            <div className="zeroRenderingCards">
              Nenhum resultado encontrado.
            </div>
          )
        }
        </Section>

        <Section title='Bebidas'>
          {
          numberOfDrinkCardsToRender != 0 ? (
            <Hover slides={
              searchedMeals
              .filter(meal => meal.category === 'bebida')
              .map((meal, index) => {
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
                      plateId={meal.id}
                      setNumOfPlates={setNumOfPlates}
                    />
                )
              })
            }/>
            ) : (
              <div className="zeroRenderingCards">
                Nenhum resultado encontrado.
              </div>
            )
          }
        </Section>
      </Main>
      <Footer />
    </Container>
    )}
    </>
  )
}