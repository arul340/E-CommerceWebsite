import Img1 from "../../assets/TopProduct1.png";
import Img2 from "../../assets/TopProduct2.png";
import Img3 from "../../assets/TopProduct3.png";
import { FaStar } from "react-icons/fa6";
import PropTypes from "prop-types";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    descrtiption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestib",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirt",
    descrtiption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestib",
  },
  {
    id: 3,
    img: Img3,
    title: "Woman Shirt",
    descrtiption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestib",
  },
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header Section  */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold ">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nemo
            voluptates
          </p>
        </div>
        {/* Body Section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duaration-300 group max-w-[300px]"
            >
              {/* Image Section  */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* Details Data  */}
              <div className="p-4 text-center">
                {/* Star Rating  */}
                <div className="w-full  flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.descrtiption}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-gray-700 font-bold rounded-full m-4 group-hover:bg-white  group-hover::text-primary py-2 px-4"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

TopProducts.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};
export default TopProducts;
