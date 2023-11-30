import React, { useState } from "react";


const ContactForm = ({ onClose }) => {
    const [darkMode, setDarkMode] = useState(false);
 

    return (
        <div className="flex flex-col justify-center items-center ">
            <div
                className={`w-full sm:p-1 rounded-md border-2 border-gray-300 contact-form common`}
            >
                <h1
                    className={`text-center text-lg sm:text-lg  text-white 
                        `}
                >
                    Contact Customer Support
                </h1>
                <div className="w-full mt-2 ">
                    <div className="mx-auto w-full  flex flex-col gap-4">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                className={`w-full px-2 py-2  rounded-lg font-medium border-2 border-transparent placeholder-gray-500 
                                text-sm focus:outline-none  focus:border-2  focus:outline bg-gray-100 text-gray-600 focus:border-white"`}
                                type="text"
                                placeholder="First Name"
                            />
                            <input
                                className={`w-full px-2 py-2 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                    ? "bg-[#302E30] text-white focus:border-white"
                                    : "bg-gray-100 text-black focus:border-black"
                                    }`}
                                type="text"
                                placeholder="Last Name"
                            />
                        </div>
                      
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                className={`w-full px-2 py-2 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                    ? "bg-[#302E30] text-white focus:border-white"
                                    : "bg-gray-100 text-black focus:border-black"
                                    }`}
                                type="tel"
                                placeholder="Email Address"
                            />
                            <input
                                className={`w-full px-2 py-2 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                    ? "bg-[#302E30] text-white focus:border-white"
                                    : "bg-gray-100 text-black focus:border-black"
                                    }`}
                                type="tel"
                                placeholder="Phone Number"
                            />
                        </div>
                        <textarea
                            className={`w-full px-2 py-2 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                ? "bg-[#302E30] text-white focus:border-white"
                                : "bg-gray-100 text-black focus:border-black"
                                }`}
                            type="email"
                            placeholder="Reason for Contact"
                        />
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                className="mt-1 w-full font-semibold bg-[#c6c6c4] text-black py-2 my-1 rounded-lg
                          focus:shadow-outline focus:outline-none"
                                onClick={onClose}
                            >
                                <span>Contact Us</span>
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
export default ContactForm;

