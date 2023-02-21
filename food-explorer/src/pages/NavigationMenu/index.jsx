import { Container, Main, Header, Buttons, LinkButton} from "./styles";
import { FiSearch, FiX } from "react-icons/fi"
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth"

export function NavigationMenu(){
  const { signOut, user } = useAuth();

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
        {user.isAdmin == 1 ? (
          <LinkButton to={"/plateAdd"}>
          Novo prato
        </LinkButton>
        ) : (
          <></>
        )}
          
          <LinkButton onClick={signOut}>
            Sair
          </LinkButton>
        </Buttons>
      </Main>
      <Footer />
    </Container>
  )
}