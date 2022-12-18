import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import { NotFound } from '../pages/NotFound'
import { SCREENS } from './endpoints'

const AppRoutes: FC = () => (
  <Routes>
    <Route path={SCREENS.NOT_FOUND} element={<NotFound />} />
  </Routes>
)

export { AppRoutes }
