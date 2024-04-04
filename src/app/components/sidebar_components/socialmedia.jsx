import React from 'react'

const Socialmedia = () => {
  return (

    <div className='flex gap-2 w-fit mx-auto mt-3' id="socialmedia">

      <div className='bg-secondary p-2 rounded size-9 flex items-center justify-center hover:bg-active transition-all duration-200 ease-in-out' >
        <a href="#"><i className="fa-brands fa-facebook-f text-[#1974EC]"></i></a>
      </div>
      <div className='bg-secondary p-2 rounded size-9 flex items-center justify-center hover:bg-active transition-all duration-200 ease-in-out'>
        <a href="#"><i className="fa-brands fa-instagram text-[#F72980]"></i></a>
      </div>
      <div className='bg-secondary p-2 rounded size-9 flex items-center justify-center hover:bg-active transition-all duration-200 ease-in-out'>
        <a href="#"><i className="fa-brands fa-github-alt text-[#1B1F23]"></i></a>
      </div>
      <div className='bg-secondary p-2 rounded size-9 flex items-center justify-center hover:bg-active transition-all duration-200 ease-in-out'>
        <a href="#"><i className="fa-brands fa-linkedin-in text-[#0063C2]"></i></a>
      </div>

    </div>

  )

}

export default Socialmedia