import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Provider, useSelector} from "react-redux"
import {store, persistor} from "./redux/store.js"

import Product from './pages/Product.jsx'
import Home from './pages/Home.jsx'
import ProductList from './pages/ProductList.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Cart from './pages/Cart.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import { PersistGate } from 'redux-persist/integration/react'

import { createBrowserRouter, RouterProvider } from "react-router-dom"





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
    path: "/login" ,
    element: <Login /> ,
    successElement: <Home />

  } ,
  {
    path: "/cart",
    element: <Cart />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <RouterProvider  router={route}/>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
)
