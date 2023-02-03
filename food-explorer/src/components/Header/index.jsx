import { Container, ContainerUser, ContainerAdm, Logo, Logout, LogoText } from "./styles"
import LogoIcon from '../../assets/logo.svg'
import ReceiptIcon from '../../assets/receipt-icon.svg'
import { Input } from "../Input"
import { Button } from "../Button"
import { FiSearch, FiLogOut } from 'react-icons/fi'
import { useAuth } from "../../hooks/auth"
import { Link, useNavigate } from "react-router-dom"


export function Header({isAdm, numOfPlates }){
  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  const item = 0
  return (
    <Container>
      {user.isAdmin == 0 ? (
        <ContainerUser>
          <Logo to={"/"}>
            <img src={LogoIcon} className='logoImg'/>
            <text>food explorer</text>
          </Logo>
          <Link to={`/favOrders/${user.id}`}> Meus favoritos </Link>
          
          <Input placeholder="Busque pelas opções de pratos" icon={FiSearch}/>
          <Button icon={ReceiptIcon} text={`Meu pedido (${numOfPlates})`} onClick={() => {navigate("/userOrders/1");}}
          />

          <Logout onClick={signOut}>
            <FiLogOut size={32}/>
          </Logout>

        </ContainerUser>
       ) : (
        <ContainerAdm>
          <LogoText>
              <Logo to={"/"}>
                <img src={LogoIcon} className='logoImg'/>
                <text>food explorer</text>
              </Logo>
              <span>admin</span>
          </LogoText>
          <Input placeholder="Busque pelas opções de pratos" icon={FiSearch}/>
          <Button text={`Novo prato`} onClick={() => {navigate("/plateAdd");}}/>
        </ContainerAdm>
       )}
    </Container>
  )
}