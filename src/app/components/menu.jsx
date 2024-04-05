'use client';
import React, { useState } from 'react';
import Menubtns from './Menu_components/menu_btns';


function Menu({ setCurrentTab }) {

    const [selectedButton, setSelectedButton] = useState("About");

    return (
        <div className=" p-4 rounded-xl bg-primary  w-full  sm:shadow-none h-28 sm:bg-transparent sm:w-fit flex items-center justify-center sm:flex-row flex-col gap-4 shadow-lg " id="menu">
            <Menubtns
                iconClass="fa-regular fa-user"
                label="About"
                onClick={() => {
                    setCurrentTab(0);
                    setSelectedButton("About")
                }}
                isSelected={selectedButton === "About"} />
            <Menubtns
                iconClass="fa-regular fa-file"
                label="Resume"
                onClick={() => {
                    setCurrentTab(1);
                    setSelectedButton("Resume")
                }}
                isSelected={selectedButton === "Resume"}
            />
            <Menubtns
                iconClass="fa-solid fa-briefcase"
                label="Works"
                onClick={() => {
                    setCurrentTab(2);
                    setSelectedButton("Works")
                }}
                isSelected={selectedButton === "Works"}
            />
            <Menubtns
                iconClass="fa-regular fa-envelope-open"
                label="Contact"
                onClick={() => {
                    setCurrentTab(3);
                    setSelectedButton("Contact")
                }}
                isSelected={selectedButton === "Contact"}
            />
        </div>
    )
}

export default Menu;
