import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { OrderedItem } from "../../components/OrderedItem";
import { PaymentMainBox, Container, Order, Main, MethodSelection, PaymentBox, CreditCardInfo, PaymentInfo, CardNumber, CardValidityCVC, CashierPayment, ApprovedPayment, DeliveredOrder } from "./styles";

import cardIcon from '../../assets/card-icon.svg'
import pixIcon from '../../assets/pix-icon.svg'

import saladaRadish from "../../assets/plates/saladaRadish.png"
import qrCode from "../../assets/qr-code.svg"
import receiptIcon from "../../assets/receipt-icon.svg"
import clockIcon from "../../assets/clock-icon.svg"
import checkIcon from "../../assets/check-icon.svg"
import deliveredOrderIcon from "../../assets/delivered-order-icon.svg"
import { useState } from "react";
import { Button } from "../../components/Button";

import { AiOutlineCheckCircle } from 'react-icons/ai'
//AiOutlineClockCircle
//AiOutlineCheckCircle

export function Payment(){
  const [pix, setPix] = useState(false);
  const [credit, setCredit] = useState(false);
  const [cashierPayment, setCashierPayment] = useState(false);
  const [approvedPayment, setApprovedPayment] = useState(false);
  const [orderDelivered, setOrderDelivered] = useState(true);
  
  return(
    <Container>
      
      <Header isAdm={false}/>
      <Main>
        <Order>
          <h1>Meu pedido</h1>
          <OrderedItem imgSrc={saladaRadish} quantity='1' plate='Salada Radish' price='R$ 25,97'/>
          <OrderedItem imgSrc={saladaRadish} quantity='1' plate='Salada Radish' price='R$ 25,97'/>
          <OrderedItem imgSrc={saladaRadish} quantity='1' plate='Salada Radish' price='R$ 25,97'/>
          <OrderedItem imgSrc={saladaRadish} quantity='1' plate='Salada Radish' price='R$ 25,97'/>
          <h2>Total: R$ 103,88</h2>
        </Order>
        <PaymentMainBox>
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


            <PaymentInfo>
              {pix && <img src={qrCode}/> }
              {credit && 
                <CreditCardInfo>
                  <CardNumber>
                    <label htmlFor="cardNumber" >Número do cartão</label>
                    <input type='text' placeholder='0000 0000 0000 0000' id='cardNumber'/>
                  </CardNumber>
                  <CardValidityCVC>
                      <div>
                        <label htmlFor="validade" >Validade</label>
                        <input type='text' placeholder='04/25' id='validade'/>
                      </div>
                      <div>
                        <label htmlFor="CVC" >CVC</label>
                        <input type='text' placeholder='333' id='CVC'/>
                      </div>
                  </CardValidityCVC>
                  <Button icon={receiptIcon} text='Finalizar pagamento'/>
                </CreditCardInfo>
              }
              {cashierPayment && 
                <CashierPayment>
                  <img src={clockIcon}/> 
                  <h2>Aguardando pagamento no caixa</h2>
                </CashierPayment> 
              }
              {approvedPayment && 
                <ApprovedPayment>
                  <img src={checkIcon}/> 
                  <h2>Pagamento aprovado!</h2>
                </ApprovedPayment>
              }
              {orderDelivered && 
                <DeliveredOrder>
                  <img src={deliveredOrderIcon}/>
                  <h2>Pedido entregue!</h2>
                </DeliveredOrder> 
              }

            </PaymentInfo>

          </PaymentBox>
        </PaymentMainBox>
      </Main>
      <Footer />
    </Container>
  )
}