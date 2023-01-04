import { Container, Form, Logo } from "./styles";
import LogoIcon from '../../assets/logo.svg'
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignUp(){
  return(

    <Container>
      <Logo>
        <img src={LogoIcon} className='logoImg'/>
        
        <text>food explorer</text>
      </Logo>
      <Form>
        <h1>Crie sua conta</h1>

        <label htmlFor='name'>Seu nome</label>
        <Input placeholder='Exemplo: Maria da Silva' bgColor={'transparent'} borderColor={'red'} border={'solid'} borderWidth={1} id='name' type="text" />

        <label htmlFor="email">Email</label>
        <Input placeholder='Exemplo: exemplo@exemplo.com.br' bgColor={'transparent'} borderColor={'red'} border={'solid'} borderWidth={1} id='email' type="email"/>

        <label htmlFor="password">Senha</label>
        <Input placeholder='No mínimo 6 caracteres' bgColor={'transparent'} borderColor={'red'} border={'solid'} borderWidth={1} id='password' type="password" />

        <Button text='Criar conta' type="submit" />
        <ButtonText title='Já tenho uma conta'/>
      </Form>
    </Container>
  )
}