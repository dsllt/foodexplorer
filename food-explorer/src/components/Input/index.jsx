import { Container } from "./styles";

export function Input({icon: Icon, bgColor,borderColor,border, borderWidth,inputWidth, ...rest}){
  return(
    <Container style={{backgroundColor: bgColor, borderColor: borderColor, border: border, borderWidth:borderWidth }} >
      {Icon && <Icon size={24}/>}
      <input width={inputWidth ?? '100%'} { ...rest} />
    </Container>
  )
}