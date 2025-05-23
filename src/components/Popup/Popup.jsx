import { IoCloseOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const Popup = ({ orderPopup, setOrderPopup }) => {
  if (!orderPopup) return null; // Jangan render jika popup tidak aktif

  return (
    <div className="popup">
      <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
          <div className="flex item-center justify-between">
            <h1>Order Now</h1>
            <IoCloseOutline
              className="text-3xl cursor-pointer"
              onClick={() => setOrderPopup(false)} // Tutup popup
            />
          </div>
          {/* form Section */}
          <div className="mt-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4 "
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4 "
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4 "
            />
            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  orderPopup: PropTypes.func.isRequired,
  setOrderPopup: PropTypes.func.isRequired,
};
export default Popup;
