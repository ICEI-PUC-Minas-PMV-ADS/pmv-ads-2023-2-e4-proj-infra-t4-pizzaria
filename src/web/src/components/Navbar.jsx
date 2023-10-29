import { Badge } from "@mui/material";
import { Search, ShoppingBasketOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom"

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity)
  return (
    <div className="Container h-14">
      <div className="Wrapper py-2 px-5 flex justify-between items-center">
        <div className="Left flex-1 flex items-center">
          {/* <span className="Language text-sm cursor-pointer">BR</span> */}
          <div className="SearchContainer border-2 border-gray-300 flex items-center ml-6 p-1">
            <input type="text" className="Input border-none outline-none" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className="Center flex-1 text-center">
          <Link to={`/home`}>
            <h1 className="font-bold text-2xl text-orange-test cursor-pointer"> PIZZARIA </h1>
          </Link>
        </div>
        <div className="Right flex-1">
          <div className="MenuItem text-sm cursor-pointer">
            <ul className="flex flex-row gap-6 items-center justify-end" >
              <li>REGISTER</li>
              <li>SIGN IN</li>
              <Link to='/cart'>
                <li>
                  <Badge badgeContent={quantity} color="primary">
                    <ShoppingBasketOutlined />
                  </Badge>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
