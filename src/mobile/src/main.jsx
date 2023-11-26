// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "../App.js"
// import { Provider, useSelector } from "react-redux";
// import { store, persistor } from "./redux/store.js";

// import Home from "./screens/Home.js";
// import ProductList from "./screens/ProductList.js";
// import Registro from "./screens/Registro.js";
// import Login from "./screens/Login.js";
// import Pedidos from "./screens/Pedidos.js";
// import { PersistGate } from "redux-persist/integration/react";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const route = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/products/:category",
//     element: <ProductList />,
//   },

//   {
//     path: "/product/:id",
//     element: <Product />,
//   },
//   {
//     path: "/Registro",
//     element: <Registro />,
//   },
//   {
//     path: "/home",
//     element: <Home />,
//     // successElement: <Home />,
//   },
//   {
//     path: "/Pedidos",
//     element: <Pedidos />,
//   },
// ]);


// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <RouterProvider router={route} />
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );
