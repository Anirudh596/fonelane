import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navigation/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import routes from './Routes';

function App() {
  return (
    <>
      <div className="w-full sticky top-0 bg-[#f9f9f9] z-30">
        <Navbar />
      </div>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
