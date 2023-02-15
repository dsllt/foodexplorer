import { Container, Main, Form } from "./styles";
import { FiUpload } from "react-icons/fi"
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { IngredientsInput } from "../../components/IngredientsInput";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function PlateEdit(){
  const { state } = useLocation();

  const [ mealId, setMealId ] = useState(state.plateId)
  const [ ingredients, setIngredients ] = useState([])
  const [ newIngredient, setNewIngredient ] = useState("")
  const [ name, setName ] = useState(state.plate)
  const [ image, setImage ] = useState(state.imgSrc.split("/").pop())
  const [ description, setDescription ] = useState(state.plateDescription)
  const [ price, setPrice ] = useState(state.platePrice)
  const [ category, setCategory ] = useState(state.category)

  const navigate = useNavigate();

  useEffect(() => {
    const meals = JSON.parse(localStorage.getItem("@foodexplorer:meals"));
    const currentMeal = meals.find(meal => meal.id === state.plateId);

    const ingredients = JSON.parse(localStorage.getItem("@foodexplorer:ingredients"));
    const ingredient = []
    ingredients
      .filter(ingredient => ingredient.mealId === state.plateId)
      .map(item => { 
        ingredient.push(item.name)
      })

    setCategory(currentMeal.category);
    setIngredients(ingredient);
  }, [])
 
  function handleNewIngredients(){
    if (newIngredient !== ""){
      setIngredients(prevState => [...prevState, newIngredient])
      setNewIngredient("")
    } else {
      alert('Por favor, informe um ingrediente.')
    }
  }

  function handleDeleteIngredients(deleted){
    setIngredients(prevState => prevState.filter( ingredient => ingredient !== deleted))
  }

  async function handleUpdateMeal(){
    if (!name || !image || !ingredients || !price || !description || !category){
      return alert("Preencha todos os campos");
    }
  
    api.put('/meals', { id: mealId, name, description, category, price, image, ingredients })
    .then(() => {
        alert("Prato atualizado com sucesso!");
        navigate("/");
      } 
    )
    .catch(error => {
      console.log(error);
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert('Não foi possível cadastrar o prato.')
      }
    })
    
    const mealsResponse = await api.get("/meals")
    const ingredientsResponse = await api.get("/ingredients")
    
    localStorage.setItem("@foodexplorer:meals", JSON.stringify(mealsResponse.data));
    localStorage.setItem("@foodexplorer:ingredients", JSON.stringify(ingredientsResponse.data));
  }

  return(
    <Container>
      <Header />

      <Main>
        <h1>Editar prato</h1>
        <Form>
          <div className="inputLine">
            <div className="input-wrapper-minor">
              <label htmlFor="plateName">Imagem do prato</label>
              <div id="plateImage">
                <FiUpload size={20}/> Selecionar imagem
                <input 
                  id="plateImage" 
                  type='file'
                  onChange={e => setImage(e.target.value)} 
                />
              </div>
            </div>
            <div className="input-wrapper">
              <label htmlFor="plateName">Nome</label>
              <input 
                id="plateName" 
                type="text" 
                placeholder="Ex.: Salada Ceasar"
                value={name}
                onChange={e => setName(e.target.value)} 
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="plateCategory">Categoria</label>
              <select 
                id="plateCategory" 
                onChange={e => setCategory(e.target.value)} 
                defaultValue={category}
              >
                <option value="none" disabled hidden>Selecione uma categoria</option>
                <option value="refeicao">Refeição</option>
                <option value="sobremesa">Sobremesa</option>
                <option value="bebida">Bebida</option>
              </select>
            </div>
          </div>
          <div className="inputLine">
            <div className="input-wrapper">
              <label htmlFor="plateIngredients">Ingredientes</label>
              <div className="plateIngredients">
                {ingredients.map((ingredient, index) => (
                  <IngredientsInput id="plateIngredients" placeholder={ingredient} key={String(index)} onClick={() => handleDeleteIngredients(ingredient)}/>
                ))}
                <IngredientsInput 
                  id="plateIngredients" 
                  placeholder='Adicionar' 
                  value={newIngredient}
                  isNew 
                  onChange={e => setNewIngredient(e.target.value)} 
                  onClick={handleNewIngredients}
                />
              </div>
            </div>
            <div className="input-wrapper-minor">
              <label htmlFor="platePrice">Preço</label>
              <input 
                id="platePrice" 
                type='text' 
                placeholder="R$ 00,00" 
                value={price}
                onChange={e => setPrice(e.target.value)} 
              />
            </div>
          </div>

          <div className="inputLineDescription">
            <label htmlFor="description">Descrição</label>
            <textarea 
              id="description" 
              value={description}
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={e => setDescription(e.target.value)}
            />
          </div>

        </Form>

        <div>
          <Button className='deleteOrderButton' text='Excluir prato' onClick={handleUpdateMeal}/>
          <Button className='updateOrderButton' text='Salvar alterações' onClick={handleUpdateMeal}/>
        </div>
      </Main>
      <Footer />
    </Container>
  )
}