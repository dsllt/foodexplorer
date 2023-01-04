import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, Main, Orders } from "./styles";

export function UserOrders(){
    return(
        <Container>
            <Header />
            <Main>
                <h1>Pedidos</h1>
                <Orders>
                    <thead>
                        <tr>
                          <th>Status</th>
                          <th>Código</th>
                          <th>Detalhamento</th>
                          <th>Data e hora</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><div> <span id="pendente">•</span> Pendente</div></td>
                        <td>00000004</td>
                        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                        <td>20/05 às 18h00</td>
                      </tr>


                      <tr>
                        <td> <div><span id="preparando">•</span> Preparando </div></td>
                        <td>00000003</td>
                        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                        <td>20/05 às 18h00</td>
                      </tr>

                      <tr>
                        <td> <div><span id="entregue">•</span> Entregue </div></td>
                        <td>00000003</td>
                        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                        <td>20/05 às 18h00</td>
                      </tr>
                    </tbody>
                    
                </Orders>
            </Main>
            <Footer />

        </Container>
    )
}