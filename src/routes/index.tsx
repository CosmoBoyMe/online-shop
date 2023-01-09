import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Cart } from '../pages/Cart/Cart'
import { Main } from '../pages/Main/Main'

import { NotFound } from '../pages/NotFound'
import { ProductDetails } from '../pages/ProductDetails/ProductDetails'
import { SCREENS } from './endpoints'

const AppRoutes: FC = () => (
  <Routes>
    <Route path={SCREENS.PRODUCT_DETAILS} element={<ProductDetails />} />
    <Route path={SCREENS.MAIN} element={<Main />} />
    <Route path={SCREENS.CART} element={<Cart />} />
    <Route path={SCREENS.NOT_FOUND} element={<NotFound />} />
  </Routes>
)

export { AppRoutes }
