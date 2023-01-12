import { Container, Main, Form } from "./styles";
import { FiUpload } from "react-icons/fi"
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { IngredientsInput } from "../../components/IngredientsInput";

export function PlateAdd(){
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
                <input id="plateImage" type='file'/>
              </div>
            </div>
            <div className="input-wrapper">
              <label htmlFor="plateName">Nome</label>
              <input id="plateName" type="text" placeholder="Ex.: Salada Ceasar"/>
            </div>
          </div>
          <div className="inputLine">
            <div className="input-wrapper">
              <label htmlFor="plateIngredients">Ingredientes</label>
              <div className="plateIngredients">
                <IngredientsInput id="plateIngredients" placeholder='pão naan' />
                <IngredientsInput id="plateIngredients" placeholder='pão naan' /><IngredientsInput id="plateIngredients" placeholder='pão naan' />
                <IngredientsInput id="plateIngredients" placeholder='pão naan' />
                <IngredientsInput id="plateIngredients" placeholder='Adicionar' isNew/>
              </div>
            </div>
            <div className="input-wrapper-minor">
              <label htmlFor="platePrice">Preço</label>
              <input id="platePrice" type='text' placeholder="R$ 00,00"/>
            </div>
          </div>

          <div className="inputLineDescription">
            <label htmlFor="description">Descrição</label>
            <textarea id="description" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
          </div>

        </Form>

        <div>
          <Button className='addOrderButton' text='Adicionar pedido'/>
        </div>
      </Main>
      <Footer />
    </Container>
  )
}