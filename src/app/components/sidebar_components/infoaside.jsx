import React from 'react'

const InfoAside = () => {
  return (
    <div className='px-4 py-10 mt-5 bg-secondary rounded-lg overflow-hidden'>

      <div className='flex gap-2 mb-4'>

        <div className='size-[50px] flex items-center justify-center bg-primary rounded'>
          <i className="fa-solid fa-mobile text-[24px]"></i>
        </div>

        <div className=''>
          <h3 className='text-sm'>Phone</h3>
          <p className='font-semibold text-[0.75em]'>+212 6 03 96 82 51</p>
        </div>

      </div>

      <div className='flex  gap-2 mb-4'>

        <div className='size-[50px] flex items-center justify-center bg-primary rounded'>
          <i className="fa-solid fa-at text-[18px]"></i>

        </div>

        <div className='w-[150px] '>
          <h3 className='text-sm'>Email</h3>
          <p className='font-semibold text-[0.73em]'>noureddinecharifi97<span className='text-[0.7em]'>@gmail.com</span></p>
        </div>

      </div>

      <div className='flex  gap-2 mb-4'>

        <div className='size-[50px] flex items-center justify-center bg-primary rounded'>
          <i className="fa-solid fa-location-dot text-[18px]"></i>

        </div>

        <div className='w-[150px] '>
          <h3 className='text-sm'>Location</h3>
          <p className='font-semibold text-[0.75em]'>Ouarzazate, Morocco</p>
        </div>

      </div>

      <div className='flex  gap-2 '>

        <div className='size-[50px] flex items-center justify-center bg-primary rounded'>
        <i class="fa-solid fa-cake-candles text-[18px]"></i>

        </div>

        <div className='w-[150px] '>
          <h3 className='text-sm'>Birthday</h3>
          <p className='font-semibold text-[0.75em]'>16-08-1997</p>
        </div>

      </div>

    </div>
  )
}

export default InfoAside