import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img className="header_logo" src="./delbott-blue.png" />
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <div className="header_nav"></div>
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
      </div>
    </div>
  );
}

export default Header;
