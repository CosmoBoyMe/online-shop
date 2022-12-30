import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Main } from '../pages/Main'

import { NotFound } from '../pages/NotFound'
import { SCREENS } from './endpoints'

const AppRoutes: FC = () => (
  <Routes>
    <Route path={SCREENS.MAIN} element={<Main />} />
    <Route path={SCREENS.NOT_FOUND} element={<NotFound />} />
  </Routes>
)

export { AppRoutes }
