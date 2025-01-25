import BannerImg from "../../assets/Banner.png";
import { GrSecure } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-24 sm:py:0">
      <div className="container">
        <div className="grid grid-cols-1  sm:grid-cols-2 gap-6 item-center">
          {/* Image Section  */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[450px] w-full max-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
          {/* Text Section  */}
          <div className="flex flex-col justify-center gap-4 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold ">
              Winter Sale up to 50% Off
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              assumenda officiis doloribus id voluptatibus facere adipisci nemo
            </p>
            <div data-aos="fade-up">
              <div className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400 mb-1" />
                <p>Quality products</p>
              </div>
              <div className="flex items-center gap-4">
                <FaShippingFast className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400 mb-1" />
                <p>Fast Delevery</p>
              </div>
              <div className="flex items-center gap-4">
                <MdOutlinePayments className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400 mb-1" />
                <p>Fast Delevery</p>
              </div>
              <div className="flex items-center gap-4">
                <BiSolidOffer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400 mb-1" />
                <p>Fast Delevery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
