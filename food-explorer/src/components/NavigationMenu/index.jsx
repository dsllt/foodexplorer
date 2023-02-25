import { Link } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi"
import { Container, Main, Header, Buttons, LinkButton} from "./styles";
import { Footer } from "../Footer";
import { Input } from "../Input";
import { useAuth } from "../../hooks/auth"

export function NavigationMenu({handleCloseMenuMobile, ...rest}){
  const { signOut, user } = useAuth();

  return(
    <Container>
      <Header>
        <Link 
          onClick={handleCloseMenuMobile}
        >
          <FiX />
        </Link> 
        <h1>Menu</h1>
        
      </Header>

      <Main>
        <div className="inputSearch">
          <Input  placeholder="Busque pelas opções de pratos" icon={FiSearch}  {...rest}/>
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