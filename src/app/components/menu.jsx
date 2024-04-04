'use client';
import React, { useState } from 'react';
import Menubtns from './Menu_components/menu_btns';

function Menu({ setCurrentTab }) {

    const [selectedButton, setSelectedButton] = useState("About");

    return (
        <div className=" primary h-full w-40 flex items-center justify-center p-4 rounded-xl flex-col gap-4 shadow-lg">
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
