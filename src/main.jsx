import React from 'react'
import ReactDOM from 'react-dom/client'


import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { UserProvider } from './contexts/user';
import { TaskProvider } from './contexts/tasks';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        <TaskProvider>
        <App />
        </TaskProvider>
      </UserProvider>
    </React.StrictMode>
  </BrowserRouter>
)
