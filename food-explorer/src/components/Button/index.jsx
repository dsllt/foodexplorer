import { Container } from "./styles";

export function Button({icon: Icon, text, ...rest}){
  return(
    <Container {...rest} type='button'>
      {Icon && <img src={Icon} />}
      <span>{text}</span>
    </Container>
  )
}