import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";

import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import StripeCheckout from "react-stripe-checkout";

import { userRequest } from "../requestMethods"

// const KEY = JSON.stringify(import.meta.env.VITE_REACT_APP_STRIPE)
// console.log(KEY)
const KEY = "pk_test_51NvPRWAE85GN1tmscXACWc2wRBACftlupULXfCmQxwY6lF2XKmETJQmxlVzXgWV0tShFxZuYIQcbVql6BZKVsvzX00cP6AqZRp"

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
 
  const onToken = (token) => {
    setStripeToken(token);
  };

  return (
    <div className="Container ">
      <Navbar />
      <Announcement />
      <div className="Wrapper p-5">
        <h1 className="font-light text-4xl text-center ">Pedidos</h1>
        <div className="Top flex items-center justify-between p-5">
          <button className="p-2 font-semibold cursor-pointer border-2 border-black">
            CONTINUE COMPRANDO
          </button>
          <div className="TopTexts ">
            <span className="underline cursor-pointer my-0 mx-2">
              Carrinho (2)
            </span>
            <span className="underline cursor-pointer my-0 mx-2">
              Lista de Desejos (0)
            </span>
          </div>
          <button className="p-2 font-semibold cursor-pointer border-2 border-black bg-black text-white">
            CHECKOUT
          </button>
        </div>

        <div className="Bottom flex justify-between">
          <div className="Info flex-3">
            {cart.products.map((product) => (
              <div className="Product my-5 flex justify-between">
                <div className="ProductDetail flex-2 flex">
                  <img className="w-40" src={product.img} />
                  <div className="Datails p-5 flex flex-col justify-around">
                    <span>
                      <b>Produto:</b> {product.title}
                    </span>
                    <span>
                      <b>ID:</b> {product._id}{" "}
                    </span>
                  </div>
                </div>
                <div className="PriceDetail flex-one flex flex-col items-center justify-center">
                  <div className="ProductAmountContainer flex items-center mb-5">
                    <Add />
                    <div className="ProductAmount text-2xl m-2">
                      {product.quantity}
                    </div>
                    <Remove />
                  </div>
                  <div className="ProductPrice text-3xl font-extralight">
                    R$ {product.price * product.quantity}
                  </div>
                </div>
              </div>
            ))}

            <hr className="bg-gray-200 border-none h-1" />
          </div>
          <div className="Summary flex-one border-2 border-gray-300 rounded-xl p-5 h-70vh">
            <h1 className="font-extralight text-3xl">RESUMO DO PEDIDO</h1>

            <div className="SummaryItem my-8 mx-0 flex justify-between">
              <span>Subtotal:</span>
              <span>R$ {cart.total}</span>
            </div>
            <div className="SummaryItem my-8 mx-0 flex justify-between">
              <span>Frete:</span>
              <span>R$ 5,90</span>
            </div>
            <div className="SummaryItem my-8 mx-0 flex justify-between">
              <span>Desconto:</span>
              <span>R$ -5,90</span>
            </div>
            <div className="SummaryItem my-8 mx-0 flex justify-between font-medium text-2xl">
              <span className="">Total:</span>
              <span>R$ {cart.total}</span>
            </div>
            <StripeCheckout 
            name="Pizzaria"
            billingAddress
            shippingAddress
            description={`Total foi de R$ ${cart.total}`}
            amount={cart.total*100}
            token={onToken}
            stripeKey={KEY}
            >

              <button className="w-full p-3 bg-black text-white font-semibold">
                CHECKOUT
              </button>
           
            </StripeCheckout>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
