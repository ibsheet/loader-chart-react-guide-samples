import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './config/config'

import App from './components/App'
import ErrorBoundary from './components/ErrorBoundary'
import store from './store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  </StrictMode>
)
