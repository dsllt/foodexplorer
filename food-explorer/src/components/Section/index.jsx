import { Container } from "./styles";

export function Section({title, children}){
  return(
    <Container>
      <h1>{title}</h1>
      <div className="cards">
        {children}
      </div>
    </Container>
  )
}