import React from 'react'
import ReactDOM from 'react-dom/client'


import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { UserProvider } from './contexts/user';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        <App />
      </UserProvider>
    </React.StrictMode>,
  </BrowserRouter>,
)
