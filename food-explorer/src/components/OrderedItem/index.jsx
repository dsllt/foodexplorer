import { ButtonText } from "../ButtonText";
import { Container } from "./styles";

export function OrderedItem({imgSrc, quantity, plate, price}){
  return(
    <Container>
      <img src={imgSrc}/>
      <div className="leftContainers">
          <text>
            {quantity} x {plate} <span>{price}</span>
          </text>
        <ButtonText title='Excluir' />
      </div>
    </Container>
  )
}