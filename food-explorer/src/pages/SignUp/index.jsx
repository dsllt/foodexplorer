import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, Logo } from "./styles";
import LogoIcon from '../../assets/logo.svg';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { api } from '../../services/api';

export function SignUp(){
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const navigate = useNavigate();

  function handleSignUp(){
    //Verificar se todos campos foram preenchidos
    if (!name || !email || !password){
        return alert("Preencha todos os campos");
      }
      
    api.post('/users', { name, email, password })
    .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert('Não foi possível cadastrar.')
      }
    })
  }

  return(
    <Container>
      <Logo>
        <img src={LogoIcon} className='logoImg'/>
        
        <span>food explorer</span>
      </Logo>
      <Form>
        <h1 className="formBoxTitle">Crie sua conta</h1>

        <label htmlFor='name'>Seu nome</label>
        <Input 
          placeholder='Exemplo: Maria da Silva' 
          id='name' 
          type="text" 
          justifyContent= 'flex-start'
          onChange={e => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <Input 
          placeholder='Exemplo: exemplo@exemplo.com.br' 
          id='email' 
          type="email" 
          justifyContent= 'flex-start'
          inputWidth={250}
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

        <Button text='Criar conta' type="submit" onClick={handleSignUp}/>
        <Link to='/'>
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  )
}