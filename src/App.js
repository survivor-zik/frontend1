import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import axios from "axios";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import About from "./pages/About/About";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import Admin from "./pages/Admin/Admin";
import Products from "./pages/Products";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Purchases from "./pages/Purchases";
import NavBar from "./components/home/Header/Navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setItems } from "./redux/orebiSlice";
const Layout = () => {
  return (
    <div>
      <NavBar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/admin" element={<ProtectedRoutes />}>
        <Route path="/admin/" element={<Admin />}></Route>
        <Route path="/admin/products" element={<Products />}></Route>
        <Route path="/admin/purchases" element={<Purchases />}></Route>
      </Route>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/journal" element={<Journal />}></Route>
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/paymentgateway" element={<Payment />}></Route>
      </Route>
    </Route>
  )
);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async (dispatch) => {
      await axios
        .get("https://mathematical-lavinia-survivor.koyeb.app/products/", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          dispatch(setItems(response.data));
        })
        .catch((err) => {
          dispatch(setItems([]));
        });
    };
    fetchProducts(dispatch);
  }, [dispatch]);
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
