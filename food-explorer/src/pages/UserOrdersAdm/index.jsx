import { useState } from "react";
import Select from 'react-select';

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { colourStyles, Container, Main, Orders, Selection } from "./styles";

export function UserOrdersAdm(){
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: 'entregue', label: 'Entregue', color: '#AB222E' },
    { value: 'preparando', label: 'Preparando', color: '#FBA94C'},
    { value: 'pendente', label: 'Pendente', color: '#04D361' },
  ];
  

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
                        <td>
                          <Selection> 
                            <Select 
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={options}
                              styles={colourStyles}
                              components={{IndicatorSeparator: () => null}}
                            />
                          </Selection>
                        </td>
                        <td>00000004</td>
                        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                        <td>20/05 às 18h00</td>
                      </tr>


                      <tr>
                        <td> 
                          <Selection> 
                          <Select 
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={options}
                              styles={colourStyles}
                              components={{IndicatorSeparator: () => null}}
                            />
                          </Selection>
                        </td>
                        <td>00000003</td>
                        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                        <td>20/05 às 18h00</td>
                      </tr>

                      <tr>
                        <td> 
                          <Selection> 
                          <Select 
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={options}
                              styles={colourStyles}
                              components={{IndicatorSeparator: () => null}}
                            />
                          </Selection>
                        </td>
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