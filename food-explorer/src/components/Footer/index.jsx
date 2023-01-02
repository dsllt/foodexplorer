import { Container, Logo } from "./styles"
import LogoIcon from '../../assets/logo.svg'

export function Footer(){
  const item = 0
  return (
    <Container>
      <Logo>
        <img src={LogoIcon} className='logoImg'/>
        <text>food explorer</text>
      </Logo>
      <text>© 2022 - Todos os direitos reservados.</text>
    </Container>
  )
}