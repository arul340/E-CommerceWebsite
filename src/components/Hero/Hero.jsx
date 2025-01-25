import Image1 from "../../assets/Woman.png";
import Image2 from "../../assets/Shopping.png";
import Image3 from "../../assets/Sale.png";
import Slider from "react-slick";
import PropTypes from "prop-types";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Up to 50% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos temporibus incidunt explicabo laboriosam delectus numquam voluptate non repellat, eos voluptates accusamus eum, minima aspernatur deserunt, illo cupiditate? Pariatur, fuga quis?",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos temporibus incidunt explicabo laboriosam delectus numquam voluptate non repellat, eos voluptates accusamus eum, minima aspernatur deserunt, illo cupiditate? Pariatur, fuga quis?",
  },
  {
    id: 3,
    img: Image3,
    title: "50% off on all Products Sale",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos temporibus incidunt explicabo laboriosam delectus numquam voluptate non repellat, eos voluptates accusamus eum, minima aspernatur deserunt, illo cupiditate? Pariatur, fuga quis?",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 1200,
    slidesToScroll: 1,
    autoplay: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* Backgorund Pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      {/* Hero Section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text Content Section */}
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-delay="100"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data.title}
                    </h1>
                    <p
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-delay="300"
                      className="text-sm "
                    >
                      {data.description}
                    </p>
                    <div
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-delay="500"
                    >
                      <button
                        onClick={handleOrderPopup}
                        className="bg-gradient-to-r from-primary  to bg-secondary hover:scale-105 transition-all duration-300 text-white py-2 px-4 rounded-full"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="order-1 sm:order-2">
                    <div className="relative z-10">
                      <img
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-delay="700"
                        src={data.img}
                        alt=""
                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105  lg:scale-100 object-contain mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

Hero.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};

export default Hero;
