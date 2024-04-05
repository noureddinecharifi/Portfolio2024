import React from 'react'
import HeaderTitle from './Main_components/Title'
import SkillsCard from './About_components/Skills_cards'

function About() {
  return (
    <div className=' w-full'>
      <HeaderTitle text='About ' />
      <div>
        <p className='text-gray-700 mb-5'>
          I'm Noureddine Charifi, a mobile developer and UI/UX designer proficient in Flutter and React Native,
          with a passion for innovation. Currently expanding skills to include React,
          Next.js, and Node.js to become a full-stack developer,
          dedicated to creating captivating digital experiences.
        </p>
      </div>
      <div className='mb-5'>
        <h2 className='text-solid font-semibold'>
          What i do
        </h2>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <SkillsCard title='Ui/ux Designer'
          description='im a UI designer dedicated to crafting engaging digital
           experiences with a focus on aesthetics and user interaction'
          icon='fa-solid fa-pen-nib' color='bg-red-100' iconColor='text-geen' />
        <SkillsCard title='Mobile developer'
          description='Versatile mobile developer proficient in Flutter and React Native, 
          skilled in creating high-performance cross-platform apps.'
          icon='fa-solid fa-mobile' color='bg-blue-100' iconColor='active' />
        <SkillsCard title='Front-end developer'
          description='Front-end developer specializing in React, Next.js, and Tailwind CSS.
          Proficient in building modern, responsive web applications with a focus on clean code and efficient user interfaces.'
          icon='fa-solid fa-code' color='bg-blue-100' iconColor='red' />
        <SkillsCard title='Backend-developer'
          description='Seasoned Laravel backend developer skilled in crafting scalable web applications.
           Proficient in database management, API development, and security implementations.'
          icon='fa-solid fa-server' color='bg-red-100' iconColor='green' />


      </div>
    </div>
  )
}

export default About