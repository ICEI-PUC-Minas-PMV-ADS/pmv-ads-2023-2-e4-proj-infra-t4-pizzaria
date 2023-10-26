import { Add, Remove } from "@mui/icons-material";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";



const Product = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id)
        setProduct(res.data)
      } catch {
      }
    };
    getProduct()
  }, [id]);

  const handleQuantity = (type) => {
    if (type === 'dec') {
      setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  const handleClick = () => {
    //update cart
    dispatch(
      addProduct({ ...product, quantity }))
  };

  return (

    <div className="Container">

      <Navbar />
      <Announcement />

      <div className="Wrapper p-12 flex ">
        <div className="ImgContainer flex-1 flex items-center justify-center">
          <img src={product.img} className="w-2/4" />
        </div>
        <div className="InfoContainer flex-1 py-0 px-12">
          <h1 className="Title text-6xl font-extralight">{product.title}</h1>
          <p className="Desc my-5 mx-0">
            {product.desc}
          </p>
          <span className="Price font-thin text-4xl">R$ {product.price}</span>
          <div className="AddContainer flex items-center justify-between mt-7">
            <div className="AmountContainer flex items-center font-bold">
              <Remove className="cursor-pointer" onClick={() => handleQuantity('dec')} />
              <span className="Amount w-7 h-7 rounded-lg border-2 border-teal-600 flex items-center justify-center my-0 mx-5">{quantity}</span>
              <Add className="cursor-pointer" onClick={() => handleQuantity('inc')} />
            </div>
            <button onClick={handleClick} className="cursor-pointer border-2 font-medium border-teal-600 p-3 rounded-lg hover:bg-teal-600 hover:text-white transition-all duration-700">ADICIONAR AO CARRINHO</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
