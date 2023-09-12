import "./App.css";
import LinkBar from "./components/Navigation/LinkBar/LinkBar";
import Navbar from "./components/Navigation/Navbar/Navbar";
import Slider from "./pages/Home/Hero/Slider/Slider";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <div className="custom-w">
        <LinkBar />
      </div>
      <hr className="h-px bg-gray-400 border-0 "></hr>
      <div className="w-full sticky top-0 bg-white z-50">
        <Navbar />
      </div>
        <Slider />
     
        <Home />
      
    </>
  );
}

export default App;
