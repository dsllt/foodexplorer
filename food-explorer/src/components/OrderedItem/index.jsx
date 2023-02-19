import { ButtonText } from "../ButtonText";
import { Container } from "./styles";

export function OrderedItem({imgSrc, quantity, plate, price}){
  return(
    <Container>
      <img src={imgSrc}/>
      <div className="leftContainers">
          <span>
            {quantity} x {plate} <span>{price}</span>
          </span>
        <ButtonText title='Excluir' />
      </div>
    </Container>
  )
}