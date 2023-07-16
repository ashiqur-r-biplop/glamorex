import React from 'react';
import { FaCircle, FaCircleCheck, FaCircleDot } from 'react-icons/fa6';

// TODO: isActiveCurrPage (isActive&&isCurrPage) condition not working
const AddProductStatusBtn = ({ isActive, isCurrPage, children }) => {
    return (
        <button className={`${(isActive&&isCurrPage) ? 'status-btn-active-confirm' : isActive ?
            "status-btn-confirm" : isCurrPage ? "status-btn-active" : 'status-btn'}`}><span>
                {isActive ? (
                    <FaCircleCheck></FaCircleCheck>
                ) : isCurrPage ?
                    <FaCircleDot></FaCircleDot> :
                    <FaCircle className="text-transparent border-2 border-slate-500 rounded-full"></FaCircle>
                }
            </span>
            {children}
        </button>
    );
};

export default AddProductStatusBtn;