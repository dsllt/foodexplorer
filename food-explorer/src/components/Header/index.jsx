import { Container, ContainerUser, ContainerAdm, Logout, LogoText, LeftLinks } from "./styles"
import LogoIcon from '../../assets/logo.svg'
import ReceiptIcon from '../../assets/receipt-icon.svg'
import { Input } from "../Input"
import { Button } from "../Button"
import { FiSearch, FiLogOut, FiMenu } from 'react-icons/fi'
import { useAuth } from "../../hooks/auth"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"


export function Header({isAdm, numOfPlates, handleOpenMenuMobile,  ...rest }){
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  return (
    <Container>
      {user.isAdmin == 0 ? (
        <ContainerUser>
          <Link to={"/navigationMenu"} className='navigationMenu'>
            <FiMenu/>
          </Link>
          <LeftLinks>
              <Link to={"/"} className='logoLinkHome'>
                <img src={LogoIcon} />
                <span>food explorer</span>
              </Link>

              <Link to={`/favOrders/${user.id}`} className='userFavorites'> Meus favoritos </Link>
          </LeftLinks>
                        
          <Input placeholder="Busque pelas opções de pratos" icon={FiSearch} {...rest}/>

          <Button className='myOrderButton' icon={ReceiptIcon} text={`Pedidos (${numOfPlates})`} onClick={() => {navigate("/userOrders/1");}}
          />

          <div className="myOrderButtonMobile"  onClick={() => navigate("/userOrders/1")}> 
            <div className="numOfPlates">{numOfPlates}</div>
            <img src={ReceiptIcon}/>
          </div>

          <Logout onClick={signOut}>
            <FiLogOut size={32}/>
          </Logout>

        </ContainerUser>
       ) : (
        <ContainerAdm>
          <Link 
            className='navigationMenu' 
            onClick={handleOpenMenuMobile}
          >
            <FiMenu/>
          </Link>
          
          <LogoText>
              <Link to={"/"} className='logoLinkHome'>
                <img src={LogoIcon} className='logoImg'/>
                <span>food explorer</span>
              </Link>
              <span className="admTag">admin</span>
          </LogoText>
          <Input className="inputSearchMeals" placeholder="Busque pelas opções de pratos" icon={FiSearch} {...rest}/>
          <Button className='newPlateButton' text={`Novo prato`} onClick={() => {navigate("/plateAdd");}}/>

          <Logout onClick={signOut}>
            <FiLogOut size={32}/>
          </Logout>
        </ContainerAdm>
       )}
    </Container>
  )
}