import { Container, Main, LinkPage } from "./styles";
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";


import SaladaRavanello from '../../assets/SaladaRavanello.png'
const plateDescription = 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim'

export function FavPlates(){

  return(
    <Container>
      <Header isAdm={false}/>
      <LinkPage to={'/'} >
        <FiChevronLeft /> voltar
      </LinkPage>
        <Main>
          <Section title='Pratos favoritos'>
            <Card 
              plateLink={'saladaRavanello'} 
              plate={'Salada Ravanello'} 
              imgSrc={SaladaRavanello} 
              plateDescription={plateDescription}
              platePrice={'R$ 49,97'}  
              favPlate
            />
            <Card 
              plateLink={'saladaRavanello'} 
              plate={'Salada Ravanello'} 
              imgSrc={SaladaRavanello} 
              plateDescription={plateDescription}
              platePrice={'R$ 49,97'}    
              favPlate
            />
            <Card 
              plateLink={'saladaRavanello'} 
              plate={'Salada Ravanello'} 
              imgSrc={SaladaRavanello} 
              plateDescription={plateDescription}
              platePrice={'R$ 49,97'}    
              favPlate
            />
            <Card 
              plateLink={'saladaRavanello'} 
              plate={'Salada Ravanello'} 
              imgSrc={SaladaRavanello} 
              plateDescription={plateDescription}
              platePrice={'R$ 49,97'}    
              favPlate
            />
            <Card 
              plateLink={'saladaRavanello'} 
              plate={'Salada Ravanello'} 
              imgSrc={SaladaRavanello} 
              plateDescription={plateDescription}
              platePrice={'R$ 49,97'}    
              favPlate
            />
            <Card 
              plateLink={'saladaRavanello'} 
              plate={'Salada Ravanello'} 
              imgSrc={SaladaRavanello} 
              plateDescription={plateDescription}
              platePrice={'R$ 49,97'}    
              favPlate
            />

          </Section>
        </Main>
      <Footer />
      
    </Container>
  )
}