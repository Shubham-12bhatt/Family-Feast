import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";




const MainRice = () => {
  return ( 
    <> 
      
    <Navbar />
      <ScrollToTop/>
        <Outlet /> 
      
    
        <Footer />
      
      </>
  );
};

export default MainRice;