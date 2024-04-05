"use client";
import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import Menu from "./components/menu";

export default function Home() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <main className="relative stretch flex flex-col items-center px-2 gap-8  py-28 pb-10  sm:px-20 sm:flex-row sm:h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex items-center gap-8 flex-col-reverse w-full  h-full max-h-full" >
        <Main currentTab={currentTab} />
        <Menu setCurrentTab={setCurrentTab} />
      </div>      
    </main>
  );
}
