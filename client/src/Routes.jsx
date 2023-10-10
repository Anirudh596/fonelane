// routes.js
import Home from "./pages/Home/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartFloat from "./components/Cart/CartFloat/CartFloat";
import Wishlist from "./components/Wishlist/Wishlist";
import Cart from "./components/Cart/Cart";
import CheckOut from "./pages/CheckOut/CheckOut";
import About from "./pages/About/About";
import Categories from "./pages/Categories/Categories";
import Contact from "./pages/Contact/Contact";
import Privacy from "./pages/PrivacyPolicy/Privacy";
import RefundReturn from "./pages/PrivacyPolicy/RefundReturn";
import ShippingPolicy from "./pages/PrivacyPolicy/ShippingPolicy";
import Iphones from "./pages/Iphones/Iphones";
import JustIn from "./pages/JustIn/JustIn";
import Deals from "./pages/Deals/Deals";

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
  {
    path: '/help',
    element: <Contact />,
  },
  {
    path: '/privacy',
    element: <Privacy />,
  },
  {
    path: '/refund-return',
    element: <RefundReturn />,
  },
  {
    path: '/shipping-policy',
    element: <ShippingPolicy />,
  },
  {
    path: '/iphones',
    element: <Iphones />,
  },
  
  {
    path: '/justin',
    element: <JustIn />,
  },
  {
    path: '/deals',
    element: <Deals />,
  },
  
];

export default routes;
