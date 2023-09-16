import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./components/Account/SignUp/SignUp";
import LogIn from "./components/Account/LogIn/LogIn";
import Home from "./pages/Home/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartFloat from "./components/Cart/CartFloat/CartFloat";
import Wishlist from "./components/Wishlist/Wishlist";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>    
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<LogIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/products" element={<ProductPage />}/>
        <Route path="/cartfloat" element={<CartFloat />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/wishlist" element={<Wishlist />}/>

      </Routes>
    
        {/* <Home /> */}
        {/* <LogIn />      */}
        {/* <SignUp /> */}
    </>
  );
}

export default App;
