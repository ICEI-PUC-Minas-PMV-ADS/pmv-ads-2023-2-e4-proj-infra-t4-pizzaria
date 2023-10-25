import { useLocation } from "react-router-dom";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { useState } from "react";

const ProductList = () => {
  const location = useLocation()
  const cat = location.pathname.split('/')[2]
  const [sort, setSort] = useState("menorPreco")

  return (
    <div className="Container ">
      <Navbar />
      <Announcement />
      <h1 className="font-semibold text-3xl m-5">{cat}</h1>
      <div className="FilterContainer flex justify-between">
        {/* <div className="Filter m-5">
          <span className="text-xl font-semibold mr-5">Filtrar Produtos: </span>
          <select className="p-3 mr-5 border-2">
            <option disabled selected>Tipo:</option>
            <option>Salgadas</option>
            <option>Doces</option>
          </select>
        </div> */}
        <div className="Filter m-5">
          <span className="text-xl font-semibold mr-5">Organizar por:</span>
          <select onChange={e=>setSort(e.target.value)} className="p-3 mr-5 border">
            <option value="menorPreco">Menor Preço</option>
            <option value="maiorPreco">Maior Preço</option>
          </select>
        </div>
      </div>
      <Products cat={cat} sort={sort}/>
      <Footer />
    </div>
  );
};

export default ProductList;
