import { Container, Logo } from "./styles"
import LogoIcon from '../../assets/logo.svg'

export function Footer(){
  const item = 0
  return (
    <Container>
      <Logo>
        <img src={LogoIcon} className='logoImg'/>
        <span>food explorer</span>
      </Logo>
      <span>© 2023 - Todos os direitos reservados.</span>
    </Container>
  )
}