import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Product from './pages/Product.jsx'
import Home from './pages/Home.jsx'
import ProductList from './pages/ProductList.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Cart from './pages/Cart.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const user = true

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products/:category",
    element: <ProductList />
  },
  {
    path: "/product/:id",
    element: <Product />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element:  <Login />
    
  },
  {
    path: "/cart",
    element: <Cart />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
