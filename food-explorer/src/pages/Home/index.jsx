import { Header } from "../../components/Header"
import { Container, Main, Title } from "./styles"
import { Footer } from "../../components/Footer"
import TitleImg from '../../assets/title-picture.png'
import { Section } from "../../components/Section"
import { Card } from "../../components/Card"
import { Hover } from "../../components/Hover"

import SaladaRavanello from '../../assets/SaladaRavanello.png'
const plateDescription = 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim'



export function Home(){
  const slides = [
    <Card 
      plateLink={'saladaRavanello'} 
      plate={'Salada Ravanello'} 
      imgSrc={SaladaRavanello} 
      plateDescription={plateDescription}
      platePrice={'R$ 49,97'}  
    />,
    <Card 
      plateLink={'saladaRavanello'} 
      plate={'Salada Ravanello'} 
      imgSrc={SaladaRavanello} 
      plateDescription={plateDescription}
      platePrice={'R$ 49,97'}  
    />,
    <Card 
      plateLink={'saladaRavanello'} 
      plate={'Salada Ravanello'} 
      imgSrc={SaladaRavanello} 
      plateDescription={plateDescription}
      platePrice={'R$ 49,97'}  
    />,
    ];
  return(
    <Container>
      <Header isAdm={false}/>
      <Main>
        <Title>
          <img src={TitleImg}/>
          <div className="titleText">
            <h1>Sabores inigualáveis</h1>
            <h2>Sinta o cuidado do preparo com ingredientes selecionados</h2>
          </div>
        </Title>
        
        <Section title='Pratos principais'>
          <Hover slides={slides}/>
        </Section>

        <Section title='Sobremesas'>
          <Hover slides={slides}/>
        </Section>
        <Section title='Bebidas'>
          <Hover slides={slides}/>
        </Section>
      </Main>
      <Footer />
    </Container>
  )
}