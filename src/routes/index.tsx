import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
<<<<<<< HEAD
import { Cart } from '../pages/Cart/Cart'
import { Main } from '../pages/Main/Main'
=======
import { Main } from '../pages/Main'
>>>>>>> 8e88ef4... feat: create main page

import { NotFound } from '../pages/NotFound'
import { ProductDetails } from '../pages/ProductDetails/ProductDetails'

import { SCREENS } from './endpoints'

const AppRoutes: FC = () => (
  <Routes>
    <Route path={SCREENS.MAIN} element={<Main />} />
<<<<<<< HEAD
    <Route path={SCREENS.CART} element={<Cart />} />
=======
>>>>>>> 8e88ef4... feat: create main page
    <Route path={SCREENS.NOT_FOUND} element={<NotFound />} />
  </Routes>
)

export { AppRoutes }
