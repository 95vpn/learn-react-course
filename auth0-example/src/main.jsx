import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider 
    domain="dev-7nxu1y0pdl8tcln4.us.auth0.com"
    clientId="IiQtqUCbmbNHc3RIMmT6REJ5jnurg1js"
    
    redirect_uri= {window.location.origin}
    >
      <App />

    </Auth0Provider>
  </StrictMode>,
)
