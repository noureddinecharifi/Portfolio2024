import React from 'react';

function HeaderTitle({ text }) {
    return <div className='flex justify-start items-center gap-5 mb-5'>
        <h1 className='text-lg text-solid'>{text}</h1>
        <div className='h-[4px] w-32 bg-active rounded-md'></div>
    </div>
}

export default HeaderTitle;
