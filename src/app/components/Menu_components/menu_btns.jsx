import React from 'react';

function Menubtns({ iconClass, label, onClick, isSelected }) {
    return (
        <div className={` shadow-md flex justify-center items-center rounded-xl h-full p-4 min-w-20 w-full ${isSelected ? 'bg-active' : 'bg-secondary'} transition-all duration-300 ease-in-out`}>
            <button className='flex flex-col text-solid justify-center items-center gap-3' onClick={onClick}>
                {iconClass && <i className={`${iconClass} text-gray-800 text-lg`}></i>}
                <span className="text-gray-700 text-[0.7em] font-semibold">{label}</span>
            </button>
        </div>
    );
}

export default Menubtns;
