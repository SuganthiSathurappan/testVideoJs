import { Button } from '@material-tailwind/react';
import React from 'react';


const Communication = ({ onClose }) => {

    return (
        <div className='flex flex-col justify-center items-center font-poppins'>
            {/* Modal body */}
            <div
                className={`p-3 rounded-2xl border-4 border-gray-300 common communication-form`}>
                <div className=" text-sm">
                    <Button className='w-full bg-transparent text-gray-100'>
                        Would you like to communicate with our production team?
                    </Button>
                </div>
                <div className="w-full flex flex-col sm:flex-row space-x-2 py-2.5 justify-center">
                    <a href className="mt-1  w-[40%] border-2 text-[16px] font-medium text-white py-2.5 my-1 rounded-xl bg-[#184bdf] text-center
                              cursor-pointer no-underline focus:shadow-outline focus:outline-none"
                        onClick={onClose}
                    >
                        Yes
                    </a>
                    <a href className="mt-1  w-[40%] border-2 text-[16px] font-medium text-white py-2.5 my-1 rounded-xl bg-[#184bdf] text-center
                              cursor-pointer no-underline focus:shadow-outline focus:outline-none"
                        onClick={onClose}
                    >
                        No
                    </a>

                </div>
            </div>
        </div>
    );
}

export default Communication
