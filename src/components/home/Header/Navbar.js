import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Search from "./Search";
import { logo } from "../../../assets/images";
import Image from "../../designLayouts/Image";

const NavBar = () => {
  const cart = useSelector((state) => state.orebiReducer.products);
  const name = useSelector((state) => state.orebiReducer.name);
  console.log("nav", name);
  return (
    <header className="w-full items-center">
      <div className="flex bg-primeColor text-white h-[60px]">
        <div className="flex items-center m-4">
          <Link to={"/"}>
            <div>
              <Image className="w-10 md:w-40 object-cover" imgSrc={logo} />
            </div>
          </Link>
        </div>
        <div className="flex grow relative items-center">
          <Search />
        </div>
        <div className="flex items-center mx-2 md:m-4">
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">
              Hello,
              <br />
              <span>{name.length > 0 ? name : " Sign In"}</span>
            </div>
          </div>
          <Link to={"/cart"}>
            <div className="flex px-1 md:px-3 justify-center">
              <FaShoppingCart className="h-[48px]" />
              <div className="relative">
                <div className="absolute font-bold m-2 text-orange-400">
                  {cart.length > 0 ? cart.length : 0}
                </div>
              </div>
              <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
