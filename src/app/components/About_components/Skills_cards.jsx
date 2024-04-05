import React from 'react'

function SkillsCard({ description, title, icon, color, iconColor}) {
    return (
        <div className={`h-full p-5 flex gap-4 justify-start items-center rounded-md ${color} shadow-lg overflow-hidden`}>
            <i className={`${icon} ${iconColor}`}></i>

            <div>
                <h4 className='text-solid font-semibold text-sm mb-2'>{title}</h4>
                <p className='text-solid text-[0.8em] w-[220] font-normal'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default SkillsCard
