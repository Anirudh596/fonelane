import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./components/Account/SignUp/SignUp";
import LogIn from "./components/Account/LogIn/LogIn";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>    
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<LogIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        
      </Routes>
    
        {/* <Home /> */}
        {/* <LogIn />      */}
        {/* <SignUp /> */}
    </>
  );
}

export default App;
