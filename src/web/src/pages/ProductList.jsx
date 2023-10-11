import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const ProductList = () => {
  return (
    <div className="Container ">
      <Navbar />
      <Announcement />
      <h1 className="font-semibold text-3xl m-5">Pizzas</h1>
      <div className="FilterContainer flex justify-between">
        <div className="Filter m-5">
          <span className="text-xl font-semibold mr-5">Filtrar Produtos: </span>
          <select className="p-3 mr-5 border-2">
            <option disabled selected>Tipo:</option>
            <option>Salgadas</option>
            <option>Doces</option>
          </select>
        </div>
        <div className="Filter m-5">
          <span className="text-xl font-semibold mr-5">Organizar por:</span>
          <select className="p-3 mr-5 border">
            <option disabled selected>Preço:</option>
            <option>Menor Preço</option>
            <option>Maior Preço</option>
          </select>
        </div>
      </div>
      <Products />
      <Footer />
    </div>
  );
};

export default ProductList;
