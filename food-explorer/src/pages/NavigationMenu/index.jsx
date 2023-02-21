import { Container, Main, Header, Buttons, LinkButton} from "./styles";
import { FiSearch, FiX } from "react-icons/fi"
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { IngredientsInput } from "../../components/IngredientsInput";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth"

export function NavigationMenu(){
  const { signOut } = useAuth();
  const navigate = useNavigate();

  return(
    <Container>
      <Header>
        <Link to={-1} >
          <FiX />
        </Link>
        <h1>Menu</h1>
        
      </Header>

      <Main>
        <div className="inputSearch">
          <Input  placeholder="Busque pelas opções de pratos" icon={FiSearch} />
        </div>
        <Buttons>
          <LinkButton to={"/plateAdd"}>
            Novo prato
          </LinkButton>
          <LinkButton onClick={signOut}>
            Sair
          </LinkButton>
        </Buttons>
      </Main>
      <Footer />
    </Container>
  )
}