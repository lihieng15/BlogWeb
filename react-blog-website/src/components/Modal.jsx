import React from "react";

const Modal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-container">
        <div className="bg-green-400 text-center p-5 h-96 lg:w-[500px] rounded shadow-md">
          {/*modal content*/}
          <h2 className="text-xl font-semibold mb-4 mt-6  uppercase">
            {" "}
            please login here!
          </h2>
          <form className="px-4">
            {
              //email
            }
            <div className="mb-5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full rounded-md border border-[#e0e0e0]  bg-white py-3 px-6 text-base font-medium text-[#687280] outline-non focus:border-[#6a64f1] focus:shadow-md "
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full rounded-md border border-[#e0e0e0]  bg-white py-3 px-6 text-base font-medium text-[#687280] outline-non focus:border-[#6a64f1] focus:shadow-md mb-5"
              />
              <button className="hover:shadow-md rounded-md bg-[#dcf06a] hover:bg-green-300 py-3 px-8 text-base font-semibold text-white outline ">
                {" "}
                Login
              </button>
            </div>
          </form>

          {/* modal close btn*/}
          <button
            onClick={onClose}
            className="bg-red-300 hover:bg-red-400 font-semibold py02 px-4 rounded inline-flex items-center mt-5"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
