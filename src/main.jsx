import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import library Router
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import UserPage from './pages/user.jsx'
import RegisterPage from './pages/register.jsx'
import LoginPage from './pages/login.jsx'
import ProductBookPage from './pages/book.jsx'
import './styles/global.css'
import TodoApp from './components/todo/TodoApp.jsx'
import ErrorPage from './pages/error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoApp />
      },
      {
        path: "/user",
        element: <UserPage />
      },
      {
        path: "/product",
        element: <ProductBookPage />
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
