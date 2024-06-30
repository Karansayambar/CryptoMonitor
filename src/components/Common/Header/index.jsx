import React from "react";
import "./style.css";
import TemporaryDrawer from "./Drawer";
import Button from "../Button";
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
  <div className="navbar">
    <h2>CryptoMonitor <span style={{color:"var(--orange"}}>.</span></h2>
    <div className="links">
      <Link to="/"><p className="link">Home</p></Link>
      <Link to="/wishlist"><p className="link">WishList</p></Link>
      <Link to="/shop"><p className="link">Shop</p></Link>
      <Link to="/compare"><p className="link">Compare</p></Link>
      <Link to="/dashboard"><Button text="Dashboard" onClick={() => console.log("click")}/></Link>
    </div>
    {/* <Button variant="contained">Contained</Button> */}
    <div className="mobile-drawer">
        <TemporaryDrawer/>
    </div>
  </div>
  </div>
);
};

export default Header;
