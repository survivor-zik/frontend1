import { useSelector } from "react-redux";
import { Outlet, Navigate, ScrollRestoration } from "react-router-dom";
import Header from "../components/home/Header/Header";
import HeaderBottom from "../components/home/Header/HeaderBottom";
import SpecialCase from "../components/SpecialCase/SpecialCase";
import Footer from "../components/home/Footer/Footer";
import FooterBottom from "../components/home/Footer/FooterBottom";
const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};
const ProtectedRoutes = () => {
  const access_token = localStorage.getItem("token");
  console.log("this is token", access_token);
  return access_token ? <Layout /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
