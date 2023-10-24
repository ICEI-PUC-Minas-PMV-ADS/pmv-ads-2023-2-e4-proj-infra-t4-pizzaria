import { Add, Remove } from "@mui/icons-material";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Product = () => {
  return (
    <div className="Container">
      <Navbar />
      <Announcement />
      <div className="Wrapper p-12 flex ">
        <div className="ImgContainer flex-1 flex items-center justify-center">
          <img
            className="w-2/4"
            src="https://github.com/walbergomes/imgs-eixo4/blob/main/pizza8.png?raw=true"
          />
        </div>
        <div className="InfoContainer flex-1 py-0 px-12">
          <h1 className="Title text-6xl font-extralight">Pizza 8</h1>
          <p className="Desc my-5 mx-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex tempora
            facilis quo quibusdam excepturi beatae totam minima architecto
            quisquam suscipit ullam debitis nulla id aspernatur asperiores,
            nobis ea molestiae magnam!
          </p>
          <span className="Price font-thin text-4xl">R$ 45</span>
          <div className="AddContainer flex items-center justify-between mt-7">
            <div className="AmountContainer flex items-center font-bold">
              <Remove className="cursor-pointer" />
              <span className="Amount w-7 h-7 rounded-lg border-2 border-teal-600 flex items-center justify-center my-0 mx-5">1</span>
              <Add className="cursor-pointer"/>
            </div>
            <button className="cursor-pointer border-2 font-medium border-teal-600 p-3 rounded-lg hover:bg-teal-600 hover:text-white transition-all duration-700">ADICIONAR AO CARRINHO</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
