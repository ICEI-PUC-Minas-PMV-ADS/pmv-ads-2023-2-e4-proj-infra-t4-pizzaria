import { Badge } from "@mui/material";
import { Search, ShoppingBasketOutlined } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className="Container h-14">
      <div className="Wrapper py-2 px-5 flex justify-between items-center">
        <div className="Left flex-1 flex items-center">
          <span className="Language text-sm cursor-pointer">BR</span>
          <div className="SearchContainer border-2 border-gray-300 flex items-center ml-6 p-1">
            <input type="text" className="Input border-none outline-none" />
            <Search style={{color: "gray", fontSize: 16}}/>
          </div>
        </div>
        <div className="Center flex-1 text-center">
          <h1 className="font-bold text-2xl text-orange-test"> PIZZARIA </h1>
        </div>
        <div className="Right flex-1">
          <div className="MenuItem text-sm cursor-pointer">
            <ul className="flex flex-row gap-6 items-center justify-end" >
              <li>REGISTER</li>
              <li>SIGN IN</li>
              <li>
                <Badge badgeContent={4} color="primary">
                  <ShoppingBasketOutlined />
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;