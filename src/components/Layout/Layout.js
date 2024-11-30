import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers.js";
import Carts from "../UI/cart/Carts.jsx";
import { useSelector } from "react-redux";
import AOS from 'aos'
import { useEffect } from "react";
import 'aos/dist/aos.css'

const Layout = () => {

  useEffect(()=>{
    AOS.init({duration:1500});
})

  const showCart = useSelector((state) => state.cartUI.cartIsVisible);
  return (
    <div>
      <Header />
      {showCart && <Carts />}
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
