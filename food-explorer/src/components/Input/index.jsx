import { Container } from "./styles";

export function Input({icon: Icon, inputWidth, justifyContent, onChangeInput, ...rest}){
  return(
    <Container style={{ justifyContent:justifyContent }} >
      {Icon && <Icon size={24}/>}
      <input width={inputWidth ?? '100%'} onChange={onChangeInput} { ...rest} />
    </Container>  
  )
}