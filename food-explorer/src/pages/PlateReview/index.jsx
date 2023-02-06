import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Ingredient } from '../../components/Ingredient'
import { Button } from '../../components/Button';
import { Container, Description, Ingredients, Main, Sale, LinkPage } from "./styles";

import { FiPlus, FiMinus, FiChevronLeft } from 'react-icons/fi'

import saladaRavanello from '../../assets/plates/saladaRavenello.png'

import ReceiptIcon from '../../assets/receipt-icon.svg'
import { useAuth } from "../../hooks/auth"

export function PlateReview(){
  const { user } = useAuth();
  const platePrice = 'R$ 49,97'
  return(
    <Container>
      <Header isAdm={false}/>
      <LinkPage to={'/'} >
        <FiChevronLeft /> voltar
      </LinkPage>
      <Main>
        <img src={saladaRavanello}/>
        <Description>
          <h1>Salada Ravanello</h1>
          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
          <Ingredients>
              <Ingredient text='alface'/>
              <Ingredient text='tomate'/>
              <Ingredient text='rabanete'/>
              <Ingredient text='pao naan'/>
          </Ingredients>
          {user.isAdmin ? (
            <Button text='editar prato' />
          ) : (
            <Sale>
              <div className="includeItem">
                  <button type="button"><FiMinus size={20}/></button> 
                  <text>01</text>
                  <button type="button"><FiPlus size={20}/></button>
              </div>
                <Button text={`incluir ∙ ${platePrice}`} />
            </Sale>
          )}
        </Description>
      </Main>
      <Footer />
    </Container>
  )
}