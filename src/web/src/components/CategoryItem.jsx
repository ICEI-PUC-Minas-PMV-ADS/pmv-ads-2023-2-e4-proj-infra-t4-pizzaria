import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <div className="Container flex-1 m-1 h-70vh relative">
      <Link to={`/products/${item.cat}`}>
        <img src={item.img} className="w-full h-full object-cover rounded-md" />
        <div className="Layer absolute inset-0 bg-black opacity-50 hover:opacity-0 transition-opacity duration-300 rounded-md"></div>
        <div className="Info absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center">
          <h1 className="font-bold text-4xl text-white mb-5">{item.title}</h1>
          <button className="p-3 font-semibold bg-orange-test text-white hover:bg-orange-400 rounded cursor-pointer ">
            COMPRE AGORA!
          </button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
