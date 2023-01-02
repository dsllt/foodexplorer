import { Button } from "../Button";
import { Container, Main, Quantity } from "./styles";
import SaladaRavanello from '../../assets/SaladaRavanello.png'

import { FiPlus, FiMinus, FiHeart, FiChevronRight } from 'react-icons/fi'

export function Card(){
  return(
    <Container>
      <div className="favorite">
        <button>
          <FiHeart size={30}/>
        </button>
      </div>
      <Main>
        <img src={SaladaRavanello}/>
        <div className="title">
          <h3>Salada Ravanello </h3>
          <FiChevronRight size={16} strokeWidth= {5}/>
        </div>
        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
        <h2>R$ 49,97</h2>

        <div className="includeItem">
          <Quantity>
            <button type="button"><FiMinus size={20}/></button>

            <text>01</text>
            <button type="button"><FiPlus size={20}/></button>

          </Quantity>
          <Button text='incluir' />
        </div>
      </Main>
    </Container>
  )
}