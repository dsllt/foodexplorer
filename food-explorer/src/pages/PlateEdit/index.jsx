import { Container, Main, Form } from "./styles";
import { FiUpload } from "react-icons/fi"
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { IngredientsInput } from "../../components/IngredientsInput";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function PlateEdit(){
  const [ ingredients, setIngredients ] = useState([])
  const [ newIngredient, setNewIngredient ] = useState("")
  const [ image, setImage ] = useState(" ")
  const [ name, setName ] = useState("")
  const [ price, setPrice ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ category, setCategory ] = useState("")

  const [ meals, setMeals ] = useState([]);

  useEffect(()=>{
    async function fetchMeals(){    
      const id = 1;
    try {
      const response = await api.get(`/meals/${id}`);
      setDescription(response.data.description);
      setImage(response.data.image);
      setName(response.data.name);
      setPrice(response.data.price);
      setCategory(response.data.category);
      //setIngredients(response.data.ingredients);

      console.log(response.data)
    } catch (error) {
      if (error.response){ alert(error.response.data.message, typeof error.response.data.message)
      } else {
        alert('Não foi possível carregar os dados do prato')
      }
    }
    }
    fetchMeals();
  }, [])

  async function loadMeal(){
    const id = 1
    try {
      const response = await api.get(`/meals/${id}`)
    } catch (error) {
      if (error.response){ alert(error.response.data.message, typeof error.response.data.message)
      } else {
        alert('Não foi possível carregar os dados do prato')
      }
    }
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
              >
                <option value="none" selected disabled hidden>Selecione uma categoria</option>
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
                  <IngredientsInput id="plateIngredients" placeholder={ingredient} key={String(index)} />
                ))}
                <IngredientsInput 
                  id="plateIngredients" 
                  placeholder='Adicionar' 
                  value={newIngredient}
                  isNew 
                  onChange={e => setNewIngredient(e.target.value)} 
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
          <Button className='deleteOrderButton' text='Excluir prato' onClick={loadMeal}/>
          <Button className='addOrderButton' text='Salvar alterações' onClick={loadMeal}/>
        </div>
      </Main>
      <Footer />
    </Container>
  )
}