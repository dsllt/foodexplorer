import { Container } from "./styles";

export function ButtonText({icon: Icon, title, ...rest}){
  return(
    <Container {...rest}>
      {Icon && <Icon size={24}/>}
      {title}
    </Container>
  )
}