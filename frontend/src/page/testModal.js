import React, { useState } from "react";


const SalesForm = ({ onClose }) => {
    const [darkMode, setDarkMode] = useState(false);
    const cursorDataURL = 'url(../public/assets/cursor.png)'


    return (
        <div className="flex flex-col justify-center items-center font-poppins">
            <div
                className={` p-3 rounded-2xl border-4 border-gray-300 sales-form common `}
            >
                <h1
                    className={`text-center text-lg sm:text-lg text-white
                        `}
                >
                    Sales Product Form
                </h1>
                <div className="w-full mt-2 ">
                    <div className="mx-auto w-full flex flex-col space-y-2">
                        <div className="flex flex-col sm:flex-row space-x-2">
                            <input
                                className={`w-full px-2 py-2  rounded-lg font-medium border-2 border-transparent placeholder-gray-500 
                                text-sm focus:outline-none  focus:border-2  focus:outline bg-white text-gray-600 focus:border-white"`}
                                type="text"
                                placeholder="Product Name"
                            />
                            <input
                                className={`w-full px-2 py-2 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                    ? "bg-[#302E30] text-white focus:border-white"
                                    : "bg-gray-100 text-black focus:border-black"
                                    }`}
                                type="text"
                                placeholder="Product ID"
                            />
                        </div>
                        <input
                            className={`w-full px-2 py-2 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                ? "bg-[#302E30] text-white focus:border-white"
                                : "bg-gray-100 text-black focus:border-black"
                                }`}
                            type="email"
                            placeholder="Company Name"
                        />
                        <div className="flex flex-col sm:flex-row space-x-2">
                            <input
                                className={`w-full px-2 py-2 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                    ? "bg-[#302E30] text-white focus:border-white"
                                    : "bg-gray-100 text-black focus:border-black"
                                    }`}
                                type="tel"
                                placeholder="City"
                            />
                            <input
                                className={`w-full px-2 py-2 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                    ? "bg-[#302E30] text-white focus:border-white"
                                    : "bg-gray-100 text-black focus:border-black"
                                    }`}
                                type="tel"
                                placeholder="Amount :$"
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row space-x-2 py-2.5 justify-center">
                                    
                        <a href className="mt-1 w-[40%] border-2 text-[16px] font-medium text-white py-2.5 my-1 rounded-xl bg-[#184bdf] text-center
                              cursor-pointer no-underline focus:shadow-outline focus:outline-none"                               
                                >
                                Submit
                            </a>
                            <a href className="mt-1 w-[40%]  border-2 text-[16px] font-medium text-white py-2.5 my-1 rounded-xl bg-[#184bdf] text-center
                              cursor-pointer no-underline focus:shadow-outline focus:outline-none"
                                onClick={onClose}
                                >
                                Cancel
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SalesForm;

// import React from 'react';

// // export default TestModal;

// const SalesForm = () => {
//     return (
//         <div className='sales-form' >
//             <h2>Sales Form</h2>
//             <button>Close</button>
//         </div >
//     )
// };

// export default SalesForm;


