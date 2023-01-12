import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { PlateReview } from './pages/PlateReview'
import { UserOrders } from './pages/UserOrders'
import { Payment } from './pages/Payment'
import { PlateAdd } from './pages/PlateAdd'
import { UserOrdersAdm } from './pages/UserOrdersAdm'
import { Routes } from './routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
      
    </ThemeProvider>
  </React.StrictMode>,
)
