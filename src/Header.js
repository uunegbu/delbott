import React from "react";
import "./Header.css";
import delbottlogo from "./delbott-blue.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <Link to={"/"}>
        <img className="header_logo" src={delbottlogo} alt="Logo" />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_options">
          <span className="header_optionLineone">Hello Guest</span>
          <span className="header_optionLinetwo">SIgn In</span>
        </div>
        <div className="header_options">
          <span className="header_optionLineone">Returns</span>
          <span className="header_optionLinetwo">& Orders</span>
        </div>
        <div className="header_options">
          <span className="header_optionLineone">Your</span>
          <span className="header_optionLinetwo">Prime</span>
        </div>
        <Link to={"/checkout"}>
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLinetwo header_basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
