import Img1 from "../../assets/Woman1.png";
import Img2 from "../../assets/Woman2.png";
import Img3 from "../../assets/Woman3.png";
import Img4 from "../../assets/Woman4.png";
import Img5 from "../../assets/Woman5.png";
import { FaStar } from "react-icons/fa6";

const productsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "Yellow",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Googles",
    rating: 4.5,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">Top Selling Products for you</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold ">
            Top Selling Products
          </h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nemo
            voluptates
          </p>
        </div>
        {/* Body Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card Section  */}
            {productsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <div>
                  <img
                    src={data.img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-600">{data.color}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View All Button */}
          <div className="flex justify-center ">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-4 rounded-md">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
