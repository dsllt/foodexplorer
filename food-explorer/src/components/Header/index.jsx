import { Container, ContainerUser, ContainerAdm, Logo, Logout } from "./styles"
import LogoIcon from '../../assets/logo.svg'
import ReceiptIcon from '../../assets/receipt-icon.svg'
import { Input } from "../Input"
import { Button } from "../Button"
import { FiSearch, FiLogOut } from 'react-icons/fi'

export function Header({isAdm}){
  const item = 0
  return (
    <Container>
      {isAdm == false ? (
        <ContainerUser>
          <Logo>
          <img src={LogoIcon} className='logoImg'/>
          <text>food explorer</text>
          </Logo>
          <a>Meus favoritos</a>
          <Input placeholder="Busque pelas opções de pratos" icon={FiSearch}/>
          <Button icon={ReceiptIcon} text={`Meu pedido (${item})`}/>

          <Logout>
          <FiLogOut size={32}/>
          </Logout>

        </ContainerUser>
       ) : (
        <ContainerAdm>
          <Logo>
            <img src={LogoIcon} className='logoImg'/>
            <text>food explorer</text>
          </Logo>
          <div>
            <a>Administrador</a>
            <Button icon={ReceiptIcon} text={`Meu pedido (${item})`}/>
          </div>


        </ContainerAdm>
       )}
    </Container>
  )
}