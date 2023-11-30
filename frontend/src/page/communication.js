import { Button } from '@material-tailwind/react';
import React from 'react';


const Communication = ({onClose}) => {

    const noModal = () => {
        console.log("yes Modal")
        onClose()
    }

    return (
        <div className='flex flex-col justify-center items-center '>
            {/* Modal body */}
            <div
                className={`sm:p-1 rounded-md common communication-form`}>
                <div className=" text-sm">
                    <Button  className='w-full bg-transparent text-gray-100'>
                        Would you like to communicate with our production team?
                    </Button>
                </div>
                <div className="w-full flex flex-col sm:flex-row gap-3">
                <Button className='cancel-button'>Yes</Button>
                    <button color="red" onClick={noModal} className='w-full bg-[#E9522C] text-gray-100 '>No</button>
                    
                </div>
            </div>
        </div>
    );
}

export default Communication
