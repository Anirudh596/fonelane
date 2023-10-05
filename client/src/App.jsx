import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartFloat from "./components/Cart/CartFloat/CartFloat";
import Wishlist from "./components/Wishlist/Wishlist";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navigation/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import SignupPopup from "./components/Authantication/SignUp";

function App() {
  return (
    <>    
      <div className="w-full sticky top-0 bg-[#f9f9f9] z-50 overflow-hidden">
        <Navbar />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/products/:id" element={<ProductPage />}/>
        <Route path="/cartfloat" element={<CartFloat />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/wishlist" element={<Wishlist />}/>
        {/* <Route path="/sign" element={<SignUp/>} /> */}
        
        {/* <Route path="/login" element={<Login />}/> */}

      </Routes>
      <Footer />
    
        {/* <Home /> */}  
        {/* <LogIn />      */}
        {/* <SignUp /> */}
    </>
  );
}

export default App;
