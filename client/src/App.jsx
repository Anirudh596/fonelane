import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartFloat from "./components/Cart/CartFloat/CartFloat";
import Wishlist from "./components/Wishlist/Wishlist";
import Cart from "./components/Cart/Cart";
// import SignupPopup from "./components/Authantication/SignUp";

function App() {
  return (
    <>    
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<ProductPage />}/>
        <Route path="/cartfloat" element={<CartFloat />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/wishlist" element={<Wishlist />}/>
        {/* <Route path="/login" element={<Login />}/> */}

      </Routes>
    
        {/* <Home /> */}  
        {/* <LogIn />      */}
        {/* <SignUp /> */}
    </>
  );
}

export default App;
