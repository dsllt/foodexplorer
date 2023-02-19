import { Container } from "./styles";

export function Ingredient({text}){
    return(
      <Container>
        <span>{text}</span>
      </Container>
    )
}