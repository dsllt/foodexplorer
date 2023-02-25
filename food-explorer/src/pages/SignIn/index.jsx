import { Container, Form, Logo } from "./styles";
import LogoIcon from '../../assets/logo.svg'
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { useState } from 'react'

export function SignIn(){
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const { signIn, fetchMeals } = useAuth();

  async function handleSignIn(){
    await signIn({ email, password });
    await fetchMeals();
  }

  return(
    <Container>
    <Logo>
      <img src={LogoIcon} className='logoImg'/>
      
      <span>food explorer</span>
    </Logo>
    <Form>
      <h1 className="formBoxTitle">Faça login</h1>

      <label htmlFor="email">Email</label>
      <Input 
        placeholder='Exemplo: exemplo@exemplo.com.br' 
        id='email' 
        type="email"
        justifyContent= 'flex-start'
        onChange={e => setEmail(e.target.value)}
      />

      <label htmlFor="password">Senha</label>
      <Input 
        placeholder='No mínimo 6 caracteres' 
        id='password' 
        type="password" 
        justifyContent= 'flex-start'
        onChange={e => setPassword(e.target.value)}
      />

      <Button text='Entrar' type="submit" onClick={handleSignIn}/>
      <Link to='/register'>
        Criar uma conta
      </Link>
    </Form>
  </Container>
  )
}