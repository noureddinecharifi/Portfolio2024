import React from 'react'

const Socialmedia = () => {
  return (

    <div className='flex gap-2 w-fit mx-auto mt-2' id="socialmedia">

      <div className='shadow bg-secondary p-2 rounded size-9 flex items-center justify-center hover:bg-active transition-all duration-200 ease-in-out' >
        <a href="#"><i className="fa-brands fa-facebook-f text-[#1974EC]"target='_blank'></i></a>
      </div>
      <div className='shadow bg-secondary p-2 rounded size-9 flex items-center justify-center hover:bg-active transition-all duration-200 ease-in-out'>
        <a href="https://www.behance.net/Noureddinecharifi" target="_blank"><i className="fa-brands fa-behance text-[#1666F7]"></i></a>

      </div>
      <div className='shadow bg-secondary p-2 rounded size-9 flex items-center justify-center hover:bg-active transition-all duration-200 ease-in-out'>
        <a href="https://github.com/noureddinecharifi" target="_blank"><i className="fa-brands fa-github-alt text-[#1B1F23]"></i></a>
      </div>
      <div className='shadow bg-secondary p-2 rounded size-9 flex items-center justify-center hover:bg-active transition-all duration-200 ease-in-out'>
        <a href="https://www.linkedin.com/in/noureddinecharifi/" target='_blank'><i className="fa-brands fa-linkedin-in text-[#0063C2]"></i></a>
      </div>

    </div>

  )

}

export default Socialmedia