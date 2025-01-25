import FooterLogo from "../../assets/Logo.png";
import Banner from "../../assets/FooterBackground.png";
import { FaInstagram, FaWhatsapp, FaFacebookF, FaMobile } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiShopee } from "react-icons/si";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  widht: "100%",
};

const FooterAbout = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const FooterLinks = [
  {
    title: "Events",
    link: "/#",
  },
  {
    title: "Customer Support",
    link: "/#about",
  },
  {
    title: "Latest Posts",
    link: "/#",
  },
  {
    title: "Community",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white font-bold">
      <div className="container ">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-4 pt-5">
          {/* company details */}
          <div className="py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left yexy-justify mb-4 flex item-center gap-3">
              <img src={FooterLogo} alt="" className="max-w-[120px]" />
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              quaerat animi autem. Doloremque, officia!
            </p>
          </div>
          {/* Footer Links Details  */}
          <div className="grid grid-cols-3 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-9 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  About Us
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterAbout.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-9 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sosial Links */}
            <div>
              <div className="flex items-center gap-3 mt-8">
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-primary hover:scale-105 duration-300" />
                </a>
                <a href="#">
                  <FaFacebookF className="text-3xl hover:text-primary hover:scale-105 duration-300" />
                </a>
                <a href="#">
                  <FaWhatsapp className="text-3xl hover:text-primary hover:scale-105 duration-300" />
                </a>
                <a href="#">
                  <SiShopee className="text-3xl hover:text-primary hover:scale-105 duration-300" />
                </a>
              </div>
              <div className="mt-8">
                <div className="flex item-center gap-3">
                  <FaLocationDot />
                  <p>Noida, Uttar Pradesh</p>
                </div>
                <div className="flex item-center gap-3">
                  <FaMobile />
                  <p>+91 123456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
