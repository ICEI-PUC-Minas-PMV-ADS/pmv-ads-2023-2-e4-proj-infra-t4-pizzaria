import {
  AddShoppingCartOutlined,
  FavoriteBorderOutlined,
  SearchOutlined,
} from "@mui/icons-material";

const Product = ({ item }) => {
  return (
    <div className="Container bg-pizzaria rounded-2xl flex flex-1 flex-col m-1 min-w-min h-96 items-center justify-center">
      <img src={item.img} className="h-1/3 mb-4" />

      <div className="Info flex flex-col gap-2 items-center">
        <h1 className="font-bold text-xl">{item.title}</h1>
        <p className="w-4/5 text-gray-600">{item.desc}</p>
        <p className="font-semibold text-lg">R$ {item.price}</p>

        <div className="Icons flex flex-row gap-8">
          <div className="Icon cursor-pointer hover:scale-150 transition-all">
            <AddShoppingCartOutlined />
          </div>
          <div className="Icon cursor-pointer hover:scale-150 transition-all">
            <FavoriteBorderOutlined />
          </div>
          <div className="Icon cursor-pointer hover:scale-150 transition-all">
            <SearchOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
