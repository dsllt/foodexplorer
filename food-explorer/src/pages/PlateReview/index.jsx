import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Ingredient } from '../../components/Ingredient'
import { Button } from '../../components/Button';
import { Container, Description, Ingredients, Main, Sale } from "./styles";

import { FiPlus, FiMinus, FiChevronLeft } from 'react-icons/fi'

import tomate from '../../assets/ingredients/tomate.png'
import rabanete from '../../assets/ingredients/rabanete.png'
import alface from '../../assets/ingredients/alface.png'
import paoNaan from '../../assets/ingredients/paoNaan.png'
import saladaRavanello from '../../assets/plates/saladaRavenello.png'

import ReceiptIcon from '../../assets/receipt-icon.svg'
import { ButtonText } from '../../components/ButtonText';
import { Link } from 'react-router-dom';

export function PlateReview(){
    return(
        <Container>
            <Header isAdm={false}/>
            <Link to={'/'} >
              <FiChevronLeft /> voltar
            </Link>
            <Main>
                <img src={saladaRavanello}/>
                <Description>

                    <h1>Salada Ravanello</h1>
                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
                    <Ingredients>
                        <Ingredient imgSrc={alface} text='alface'/>
                        <Ingredient imgSrc={tomate} text='tomate'/>
                        <Ingredient imgSrc={rabanete} text='rabanete'/>
                        <Ingredient imgSrc={paoNaan} text='paoNaan'/>
                    </Ingredients>
                    <Sale>
                        <h2>R$ 49,97</h2>
                        <div className="includeItem">
                            <button type="button"><FiMinus size={20}/></button> 
                            <text>01</text>
                            <button type="button"><FiPlus size={20}/></button>
                        </div>
                            <Button icon={ReceiptIcon} text='incluir' />
                    </Sale>
                </Description>

            </Main>

            <Footer />
        </Container>
    )
}