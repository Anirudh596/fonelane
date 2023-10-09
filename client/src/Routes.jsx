// routes.js
import Home from "./pages/Home/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartFloat from "./components/Cart/CartFloat/CartFloat";
import Wishlist from "./components/Wishlist/Wishlist";
import Cart from "./components/Cart/Cart";
import CheckOut from "./pages/CheckOut/CheckOut";
import About from "./pages/About/About";
import Categories from "./pages/Categories/Categories";

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/products/:id',
    element: <ProductPage />,
  },
  {
    path: '/cartfloat',
    element: <CartFloat />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/wishlist',
    element: <Wishlist />,
  },
  {
    path: '/checkout',
    element: <CheckOut />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/categories',
    element: <Categories />,
  },
];

export default routes;
