import { Email, Facebook, Instagram, Phone, Pinterest, Room, Twitter } from "@mui/icons-material"

const Footer = () => {
  return (
    <div className="Container flex bg-orange-200">
      <div className="Left flex-1 flex flex-col p-5">
        <h1 className="font-bold text-3xl">PIZZARIA</h1>
        <p className="my-5 mx-0">Seja bem-vindo à nossa Pizzaria, onde a paixão pela pizza se transforma em sabor. Nossas pizzas são preparadas à mão, com ingredientes frescos e uma pitada de criatividade. Descubra o melhor da tradição italiana em cada fatia!</p>
        <div className="SocialContainer flex">
          <div className="SocialIcon w-10 h-10 rounded-full text-white bg-blue-700 flex items-center justify-center mr-5">
            <Facebook />
          </div>
          <div className="SocialIcon w-10 h-10 rounded-full text-white bg-pink-600 flex items-center justify-center mr-5">
            <Instagram />
          </div>
          <div className="SocialIcon w-10 h-10 rounded-full text-white bg-blue-400 flex items-center justify-center mr-5" >
            <Twitter />
          </div>
          <div className="SocialIcon w-10 h-10 rounded-full text-white bg-red-700 flex items-center justify-center mr-5">
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="Center flex-1 p-5 ">
        <h3 className="mb-8 font-medium text-lg">Links uteis</h3>
        <ul className="m-0 p-0 list-none flex flex-wrap">
          <li className="w-1/2 mb-2 cursor-pointer">Home</li>
          <li className="w-1/2 mb-2 cursor-pointer">Cart</li>
          <li className="w-1/2 mb-2 cursor-pointer">Pizzas Salgadas</li>
          <li className="w-1/2 mb-2 cursor-pointer">Pizzas doces</li>
          <li className="w-1/2 mb-2 cursor-pointer">Bebidas</li>
          <li className="w-1/2 mb-2 cursor-pointer">Pedidos</li>
          <li className="w-1/2 mb-2 cursor-pointer">Preferidos</li>
          <li className="w-1/2 mb-2 cursor-pointer">Minha conta</li>
          <li className="w-1/2 mb-2 cursor-pointer">Termos</li>
        </ul>
      </div>
      <div className="Right flex-1 p-5">
        <h3 className="mb-8 font-medium text-lg">Contato</h3>
        <div className="ContactIcon mb-5 flex items-center"> <Room className="mr-3"/> Rua das Flores, 123 - Bairro Jardim Primavera, BH </div>
        <div className="ContactIcon mb-5 flex items-center"> <Phone className="mr-3"/> 33 98765-5432</div>
        <div className="ContactIcon mb-5 flex items-center"> <Email className="mr-3"/> contato@pizzaria.com</div>
      </div>
    </div>
  )
}

export default Footer