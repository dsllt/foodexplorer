import { Container, Main, Form } from "./styles";
import { FiUpload } from "react-icons/fi"
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { IngredientsInput } from "../../components/IngredientsInput";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
export function PlateAdd(){
  const [ ingredients, setIngredients ] = useState([])
  const [ newIngredient, setNewIngredient ] = useState("")
  const [ image, setImage ] = useState(null)
  const [ imageFile, setImageFile ] = useState(null)
  const [ name, setName ] = useState("")
  const [ price, setPrice ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ category, setCategory ] = useState("")
  const navigate = useNavigate();
  const { updateMealsOnLocalStorage } = useAuth();
  async function handleAddPlate(){
      if (!name || !image || !ingredients || !price || !description || !category){
          return alert("Preencha todos os campos");
        }
        
      api.post('/meals', { name, image, ingredients, price, description, category })
      .then(async () => {
          alert("Prato cadastrado com sucesso!");
          
          navigate("/");
          setIngredients([]);
          setImage(null);
          setName("");
          setPrice("");
          setCategory("");
          setDescription("");
      })
      .catch(error => {
        if(error.response){
          alert(error.response.data.message);
        }else{
          alert('Não foi possível cadastrar o prato.')
        }
      })
    
  }

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

  async function handleSelectImage(event){
    const file = event.target.files[0];
    const fileUploadForm = new FormData();
    fileUploadForm.append('image', file);
    
    const response = await api.patch('/meals/image', fileUploadForm);
    setImage(response.data)
  }

  return(
    <Container>
      <Header />

      <Main>
        <h1>Adicionar prato</h1>
        <Form>
          <div className="inputLine">

            <div className="input-wrapper-minor">
              <text>Imagem do prato</text>
              <div id="plateImage">
                <label htmlFor="plateImageInput">
                  <FiUpload size={20}/> Selecionar imagem
                  <input 
                    id="plateImageInput" 
                    type="file"
                    onChange={handleSelectImage}
                  />   
              </label>

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
          <Button className='addOrderButton' text='Salvar alterações' onClick={handleAddPlate}/>
        </div>
      </Main>
      <Footer />
    </Container>
  )
}