import { Container } from "./styles";

export function Input({icon: Icon, bgColor, borderColor, border, borderWidth, inputWidth, justifyContent, ...rest}){
  return(
    <Container style={{backgroundColor: bgColor, borderColor: borderColor, border: border, borderWidth:borderWidth, justifyContent:justifyContent }} >
      {Icon && <Icon size={24}/>}
      <input width={inputWidth ?? '100%'} { ...rest} />
    </Container>  
  )
}