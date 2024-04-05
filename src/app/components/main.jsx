import React from 'react'
import About from './About'
import Resume from './Resume'
import Works from './Works'
import Contact from './Contact'

function Main({ currentTab }) {
    const getPage = (tabIndex) => {
        switch (tabIndex) {
            case 0:
                return <About />
            case 1:
                return <Resume />
            case 2:
                return <Works />
            case 3:
                return <Contact />
            default:
                return <div />
        }
    }

    return (
        <div className="bg-primary w-full rounded-2xl shadow-lg overflow-auto p-14">
            <div className='transition-all duration-700 ease-in-out '>
                {getPage(currentTab)}
            </div>
        </div>
    )
}

export default Main