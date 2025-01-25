import Logo from "../../assets/Logo.png";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart, FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import PropTypes from "prop-types";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kid Wears",
    link: "/#",
  },
  {
    id: 4,
    name: "Means Wears",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronic",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 ">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center ">
          <div>
            <a href="#">
              <img src={Logo} alt="Logo" className="w-14 uppercase" />
            </a>
          </div>
          {/* Search Bar */}
          <div className="flex justify-between items-center gap-4 ">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all  duration-300 rounded-full border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary "
              />
              <IoSearch className="text-gray-500 group-hover:text-primary absolute top-1/2  -translate-y-1/2  right-3" />
            </div>
            {/* Button Section */}
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to bg-secondary transition-all duration-200 text-white py-1 px-2 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden item  items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}

          {/*Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Tranding Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md  p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};
export default Navbar;
