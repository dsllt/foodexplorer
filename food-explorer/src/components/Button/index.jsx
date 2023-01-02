import { Container } from "./styles";

export function Button({icon: Icon, text, ...rest}){
  return(
    <Container {...rest}>
      {Icon && <img src={Icon} />}
      <text>{text}</text>
    </Container>
  )
}