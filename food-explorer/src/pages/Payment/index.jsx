import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { OrderedItem } from "../../components/OrderedItem";
import { CardPayment, Container, Order, Main, MethodSelection, PaymentBox, CreditCardInfo } from "./styles";

import cardIcon from '../../assets/card-icon.svg'
import pixIcon from '../../assets/pix-icon.svg'

import saladaRadish from "../../assets/plates/saladaRadish.png"
import qrCode from "../../assets/qr-code.svg"
import receiptIcon from "../../assets/receipt-icon.svg"
import { useState } from "react";
import { Button } from "../../components/Button";

//AiOutlineClockCircle
//AiOutlineCheckCircle

export function Payment(){
  const [pix, setPix] = useState(false);
  const [credit, setCredit] = useState(true);
  const [cashierPayment, setCashierPayment] = useState(false);
  const [approvedPayment, setApprovedPayment] = useState(false);
  const [orderDelivered, setOrderDelivered] = useState(false);
  
  return(
    <Container>
      
      <Header />
      <Main>
        <Order>
          <h1>Meu pedido</h1>
          <OrderedItem imgSrc={saladaRadish} quantity='1' plate='Salada Radish' price='R$ 25,97'/>
          <OrderedItem imgSrc={saladaRadish} quantity='1' plate='Salada Radish' price='R$ 25,97'/>
          <OrderedItem imgSrc={saladaRadish} quantity='1' plate='Salada Radish' price='R$ 25,97'/>
          <OrderedItem imgSrc={saladaRadish} quantity='1' plate='Salada Radish' price='R$ 25,97'/>
          <h2>Total: R$ 103,88</h2>
        </Order>
        <CardPayment>
          <h1>Pagamento</h1>

          <PaymentBox>

          
            <MethodSelection>
              <button className="pixBox">
                  <img src={pixIcon}/>
                  PIX
                </button>
                <button className="creditoBox">
                  <img src={cardIcon}/>
                  Crédito
                </button>
            </MethodSelection>

            <div className="paymentInfo">
              {pix && <img src={qrCode}/> }
              {credit && 
                <CreditCardInfo>
                  <div>
                    <label htmlFor="cardNumber" >Número do cartão</label>
                    <input type='text' placeholder='0000 0000 0000 0000' id='cardNumber'/>
                  </div>

                    <div className="cardInfo">
                      <div>
                        <label htmlFor="validade" >Validade</label>
                        <input type='text' placeholder='04/25' id='validade'/>
                      </div>
                      <div>
                        <label htmlFor="CVC" >CVC</label>
                        <input type='text' placeholder='333' id='CVC'/>
                      </div>
                    </div>

                    <Button icon={receiptIcon} text='Finalizar pagamento'/>
                </CreditCardInfo>
              }
              {cashierPayment && <img src={qrCode}/> }
              {approvedPayment && <img src={qrCode}/> }
              {orderDelivered && <img src={qrCode}/> }
              
            </div>
          </PaymentBox>
        </CardPayment>
      </Main>
      <Footer />
    </Container>
  )
}