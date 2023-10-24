import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import { Add, Remove } from "@mui/icons-material"

const Cart = () => {
  return (
    <div className="Container ">
      <Navbar />
      <Announcement />
      <div className="Wrapper p-5">
        <h1 className="font-light text-4xl text-center ">Pedidos</h1>
        <div className="Top flex items-center justify-between p-5">
          <button className="p-2 font-semibold cursor-pointer border-2 border-black">CONTINUE COMPRANDO</button>
          <div className="TopTexts ">
            <span className="underline cursor-pointer my-0 mx-2">Carrinho (2)</span>
            <span className="underline cursor-pointer my-0 mx-2">Lista de Desejos (0)</span>
          </div>
          <button className="p-2 font-semibold cursor-pointer border-2 border-black bg-black text-white">CHECKOUT</button>
        </div>

        <div className="Bottom flex justify-between">
          <div className="Info flex-3">

            <div className="Product my-5 flex justify-between">
              <div className="ProductDetail flex-2 flex">
                <img className="w-40" src="https://github.com/walbergomes/imgs-eixo4/blob/main/pizza8.png?raw=true"/>
                <div className="Datails p-5 flex flex-col justify-around">
                  <span><b>Produto:</b> PIZZA 8 </span>
                  <span><b>ID:</b> 94595349034 </span>
                </div>
              </div>
              <div className="PriceDetail flex-one flex flex-col items-center justify-center">
                <div className="ProductAmountContainer flex items-center mb-5">
                  <Add />
                  <div className="ProductAmount text-2xl m-2">2</div>
                  <Remove />
                </div>
                <div className="ProductPrice text-3xl font-extralight">R$ 86</div>
              </div>
            </div>

            <hr className="bg-gray-200 border-none h-1"/>

            <div className="Product my-5 flex justify-between">
              <div className="ProductDetail flex-2 flex">
                <img className="w-40" src="https://github.com/walbergomes/imgs-eixo4/blob/main/pizza5.png?raw=true"/>
                <div className="Datails p-5 flex flex-col justify-around">
                  <span><b>Produto:</b> PIZZA 4 </span>
                  <span><b>ID:</b> 8443453455 </span>
                </div>
              </div>
              <div className="PriceDetail flex-one flex flex-col items-center justify-center">
                <div className="ProductAmountContainer flex items-center mb-5">
                  <Add />
                  <div className="ProductAmount text-2xl m-2">1</div>
                  <Remove />
                </div>
                <div className="ProductPrice text-3xl font-extralight">R$ 38</div>
              </div>
            </div>

          </div>
          <div className="Summary flex-one border-2 border-gray-300 rounded-xl p-5 h-70vh">
            <h1 className="font-extralight text-3xl">RESUMO DO PEDIDO</h1>

            <div className="SummaryItem my-8 mx-0 flex justify-between">
              <span>Subtotal:</span>
              <span>R$ 124,00</span>
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
              <span>R$ 124,00</span>
            </div>
            <button className="w-full p-3 bg-black text-white font-semibold">CHECKOUT</button>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default Cart