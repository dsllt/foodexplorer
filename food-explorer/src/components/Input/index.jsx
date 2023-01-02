import { Container } from "./styles";

export function Input({icon: Icon, bgColor,borderColor,border, borderWidth, ...rest}){
  return(
    <Container style={{backgroundColor: bgColor, borderColor: borderColor, border: border, borderWidth:borderWidth }} >
      {Icon && <Icon size={24}/>}
      <input {...rest} />
    </Container>
  )
}