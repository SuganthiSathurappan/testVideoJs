import React, { useState } from "react";


const SalesForm = ({ onClose }) => {
    const [darkMode, setDarkMode] = useState(false);
    const cursorDataURL = 'url(../public/assets/cursor.png)'


    return (
        <div className="flex flex-col justify-center items-center ">
            <div
                className={` sm:p-1 rounded-md border-2 border-gray-300 sales-form`}
            >
                <h1
                    className={`text-center text-xl sm:text-xl font-semibold text-white
                        `}
                >
                    Sales Product Form
                </h1>
                <div className="w-full mt-2 ">
                    <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
                        <div className="flex flex-col sm:flex-row gap-3">
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
                        <div className="flex flex-col sm:flex-row gap-3">
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
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                className="mt-1 w-full font-semibold bg-[#E9522C] text-black py-2 my-1 rounded-lg
                          focus:shadow-outline focus:outline-none"
                                onClick={onClose}
                            >
                                <span>Submit</span>
                            </button>
                            <button
                               
                                className="mt-1 w-full font-semibold bg-[#c6c6c4] text-black my-1 py-2 rounded-lg
                          focus:shadow-outline focus:outline-none"
                                onClick={onClose}
                            >
                                <span>Cancel</span>
                            </button>
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


