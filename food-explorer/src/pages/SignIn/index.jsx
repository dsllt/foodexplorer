import { Container, Form, Logo } from "./styles";
import LogoIcon from '../../assets/logo.svg'
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SignIn(){
  return(
    <Container>
    <Logo>
      <img src={LogoIcon} className='logoImg'/>
      
      <text>food explorer</text>
    </Logo>
    <Form>
      <h1>Faça login</h1>

      <label htmlFor="email">Email</label>
      <Input placeholder='Exemplo: exemplo@exemplo.com.br' bgColor={'transparent'} borderColor={'red'} border={'solid'} borderWidth={1} id='email' type="email"/>

      <label htmlFor="password">Senha</label>
      <Input placeholder='No mínimo 6 caracteres' bgColor={'transparent'} borderColor={'red'} border={'solid'} borderWidth={1} id='password' type="password" />

      <Button text='Entrar' type="submit" />
      <Link to='/register'>
        Criar uma conta
      </Link>
    </Form>
  </Container>
  )
}