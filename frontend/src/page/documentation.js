import React, { useState } from "react";
import { Checkbox, Typography } from "@material-tailwind/react";

const ContactForm = ({ onClose }) => {
    const [darkMode, setDarkMode] = useState(false);


    return (
        <div className="flex flex-col justify-center items-center font-poppins">
            <div
                className={` p-3 rounded-2xl border-4 border-gray-300 document-form common`}
            >
                <h1
                    className={`text-left text-xl sm:text-xl mx-1  text-red-500
                        `}
                >
                    Product Requirement Document
                </h1>
                <div className="w-full ">
                    <div className="mx-auto w-full  flex flex-col space-y-2">
                        <div className="">
                            <lable
                                className={`w-full  rounded-lg font-medium border-2 border-transparent placeholder-gray-500 
                                text-sm focus:outline-none  focus:border-2  focus:outline text-white focus:border-white"`}

                            >Company Name : Logisuite</lable>
                        </div>

                        <div>
                            <p
                                className={`w-full px-2 rounded-lg font-medium border-2 border-transparent placeholder-gray-500
                                 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                        ? "bg-[#302E30] text-white focus:border-white"
                                        : "bg-gray-100 text-black focus:border-black"
                                    }`}

                            >LogiSuite is a comprehensive and user-friendly software solution for companies of all sizes within the Logistics & Transportation Industry.
                                We offer a complete portfolio of solutions including Inventory Control, Supply-Chain Management, Third-Party Logistics (3PL),
                                Freight Forwarding Software, Ocean Import, Air Import, Pickup & Delivery, Purchase Order Management and more.
                                Our Operations Software is fully integrated with LogiSuite Financials, a complete accounting system.</p>
                           
                        </div>

                        <div className="flex space-x-2  justify-center">
                            <a href
                                className=" w-[40%] border-2 text-[16px] font-medium text-white py-2.5  rounded-xl bg-[#184bdf] text-center
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
export default ContactForm;

