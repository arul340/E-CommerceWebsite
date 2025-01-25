import Img1 from "../../assets/Tesimoni1.png";
import Img2 from "../../assets/Tesimoni2.png";
import Img3 from "../../assets/Tesimoni3.png";
import Img4 from "../../assets/Tesimoni4.png";
import Img5 from "../../assets/Testimoni5.png";
import Slider from "react-slick";

var settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "ease-in-out",
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      setting: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const testimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nemo voluptates",
    img: Img1,
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nemo voluptates",
    img: Img2,
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nemo voluptates",
    img: Img3,
  },
  {
    id: 4,
    name: "Auliyahh",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nemo voluptates",
    img: Img4,
  },
  {
    id: 5,
    name: "Adindaa",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nemo voluptates",
    img: Img5,
  },
];

const testimonial = () => {
  return (
    <div className="py-10 bm-10">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 msx-w-[600px] mx-auto">
          <p className="text-sm text-primary">What our costumers are saying</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold ">
            Testimonial
          </h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nemo
            voluptates
          </p>
        </div>
        {/* Testimonial Card  */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative ">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500 ">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default testimonial;
