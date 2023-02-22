import { Routes, Route } from 'react-router-dom';
import { FavPlates } from '../pages/FavPlates';

import { Home } from '../pages/Home';
import { Payment } from '../pages/Payment';
import { PlateAdd } from '../pages/PlateAdd';
import { PlateEdit } from '../pages/PlateEdit';
import { PlateReview } from '../pages/PlateReview';
import { UserOrders } from '../pages/UserOrders';
import { UserOrdersAdm } from '../pages/UserOrdersAdm';


export function AppRoutes() {
  return(
    <Routes>
      <Route path='/payment/:id' element={<Payment />} />
      <Route path='/plateAdd' element={<PlateAdd />} />
      <Route path='/plateEdit' element={<PlateEdit/>} />
      <Route path='/plateReview/:plateName' element={<PlateReview />} />
      <Route path='/userOrders/:id' element={<UserOrders />} />
      <Route path='/userOrdersAdm' element={<UserOrdersAdm />} />
      <Route path='/favOrders/:id' element={<FavPlates />} />
      <Route path='/' element={<Home />} />
    </Routes>
  )
}