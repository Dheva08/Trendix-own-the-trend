import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products.jsx";
import TopProducts from "./components/Top Products/TopProducts.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Subscribe from "./components/Subscribe/Subscribe.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


function App() {
  useEffect(() => {
      document.title = "Trendix - E-commerce";
  }, []);

  return <div>Welcome to Trendix!</div>;
}

const App=()=>{
    
    const[orderPopup,setOrderPopup] = React.useState(false);

    const handleOrderPopup = () =>{
      setOrderPopup(!orderPopup);
    };

    React.useEffect(()=>{
      AOS.init({
        offset:100,
        duaration:800,
        easing:"ease-in-sine",
        delay:100,
      });
      AOS.refresh();
    },[]);


  return (
  <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
    <Navbar handleOrderPopup={handleOrderPopup}/>
    <Hero handleOrderPopup={handleOrderPopup}/>
    <Products />
    <TopProducts handleOrderPopup={handleOrderPopup}/>
    <Banner />
    <Subscribe />
    <Products />
    <Testimonials />
    <Footer />
    <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
  </div>
  );
};

export default App;