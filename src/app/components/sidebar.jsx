import React from 'react'
import Socialmedia from './sidebar_components/socialmedia'
import InfoAside from './sidebar_components/infoaside'
import Image from 'next/image'
import Custombutton from './sidebar_components/Custombutton'

const Sidebar = () => {
  return (
    <aside className=' bg-primary w-[320px] text-solid rounded-2xl px-7 py-10  pt-20 shadow-lg'>
      <div className=' relative'>
        <div className="relative bottom-20 -translate-y-1/2 rounded-2xl overflow-hidden w-[180px] mx-auto -mb-40">
          <Image
            className='w-full'
            width={500}
            height={500}
            src="/assets/avatar.png"
            alt="Picture of the author"
          />
        </div>
        <h1 className='font-bold text-xl text-center'>
          Noureddine charifi
        </h1>
        <div className='bg-secondary rounded-md p-1 w-40 mx-auto my-1 mb-5'>
          <p className='text-center text-sm'>
            Mobile developer
          </p>
        </div>
        <Socialmedia />
        <InfoAside />

        <Custombutton />


      </div>
    </aside>
  )
}

export default Sidebar