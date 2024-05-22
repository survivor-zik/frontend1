import {
  createBrowserRouter,
  RouterProvider,
  // Outlet,
  createRoutesFromElements,
  Route,
  // ScrollRestoration,
} from "react-router-dom";
// import Footer from "./components/home/Footer/Footer";
// import FooterBottom from "./components/home/Footer/FooterBottom";
// import Header from "./components/home/Header/Header";
// import HeaderBottom from "./components/home/Header/HeaderBottom";
// import SpecialCase from "./components/SpecialCase/SpecialCase";
import About from "./pages/About/About";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import Offer from "./pages/Offer/Offer";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import Admin from "./pages/Admin/Admin";
import Products from "./pages/Products";
// import { useSelector } from "react-redux";
import ProtectedRoutes from "./utils/ProtectedRoutes";
// const Layout = () => {
//   return (
//     <div>
//       <Header />
//       <HeaderBottom />
//       <SpecialCase />
//       <ScrollRestoration />
//       <Outlet />
//       <Footer />
//       <FooterBottom />
//     </div>
//   );
// };
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route mode="absolute" path="/admin">
        <Route path="/admin/" element={<Admin />}></Route>
        <Route path="/admin/products" element={<Products />}></Route>
        <Route path="/admin/purchases" element={<About />}></Route>
      </Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/" element={<SignIn />}></Route>
      <Route path="/" element={<ProtectedRoutes />}>
        {/* ==================== Header Navlink Start here =================== */}
        <Route path="/home" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/journal" element={<Journal />}></Route>
        {/* ==================== Header Navlink End here ===================== */}
        <Route path="/offer" element={<Offer />}></Route>
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/paymentgateway" element={<Payment />}></Route>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
