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
    <header className="min-w-[1000px]">
      <div className="flex bg-primeColor text-white h-[60px]">
        {/* Left */}
        <div className="flex items-center m-4">
          <Link to={"/"}>
            <div>
              <Image className="w-40 object-cover" imgSrc={logo} />
            </div>
          </Link>
        </div>
        {/* Middle */}
        <div className="flex grow relative items-center">
          <Search />
        </div>
        {/* Right */}
        <div className="flex items-center m-4">
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">
              Hello,
              <span>{name.length > 0 ? name : " sign in"}</span>
            </div>
            <div className="text-sm xl:text-base font-bold">
              Accounts & Lists
            </div>
          </div>
          <Link to={"/cart"}>
            <div className="flex pr-3 pl-3 justify-center">
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
