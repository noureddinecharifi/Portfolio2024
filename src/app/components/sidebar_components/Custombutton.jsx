'use client';
import React from 'react'

function Custombutton() {
   
    return (
        <div className='mt-6 mx-auto w-3/4 shadow-lg'>
            <a download= '/Noureddinecharifi.pdf' href='/Noureddinecharifi.pdf' className='bg-active w-full px-5 py-3 rounded-md text-white flex items-center justify-center gap-2 hover:bg-blue-400 hover:text-primary transition-all duration-500 eas'>
                <i className="fa-solid fa-file-arrow-down"></i>
                Download cv
            </a>
        </div>
    )
}

export default Custombutton
