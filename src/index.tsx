import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import store from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
<<<<<<< Updated upstream
    <App />
=======
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
>>>>>>> Stashed changes
  </React.StrictMode>,
)

reportWebVitals()
