import './App.css'
import { AppRoutes } from './routes'

import { Header } from './components/Header'

function App() {
  return (
    <div className='app'>
      <Header />
      <AppRoutes />
    </div>
  )
}

export default App
