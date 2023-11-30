// ModalComponent.jsx
import React from 'react';
import { Button } from "@material-tailwind/react";

const ModalComponent = ({ show, handleClose }) => {
    return (
        <div className='bg-white'>

            {/* Modal header */}
            <div className="w-full flex items-start justify-start p-3 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900">Confirmation</h3>
            </div>
            {/* Modal body */}
            <div className="mb-2">
                <p className='mb-2 text-lg text-red-800'>Display Production Modal Popup</p>

                <Button onClick={handleClose} color="green" className='mx-2 mb-2'>Cancel</Button>

            </div>
        </div>
    );
};

export default ModalComponent;
