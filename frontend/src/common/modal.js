// components/Modal.js
import React from 'react';

// interface ModalProps {
//     isOpen: boolean;
//     onClose: () => void;
//     children: any
// }

const Modal = ({ isOpen, onClose, children }) => {

    if (!isOpen) return null;

    return (
        <div className=" fixed overflow-x-hidden overflow-y-auto outline-nonefixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-500 font-poppins">
            <div className="relative  w-[700px] bg-transparent ">
                <div className="">{children}</div>                
            </div>
        </div>
    );
};

export default Modal;
