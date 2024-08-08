import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import library Router
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import UserPage from './pages/user.jsx'
import RegisterPage from './pages/register.jsx'
import LoginPage from './pages/login.jsx'
import ProductsPage from './pages/product.jsx'
import './styles/global.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/user",
        element: <UserPage />
      },
      {
        path: "/product",
        element: <ProductsPage />
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
