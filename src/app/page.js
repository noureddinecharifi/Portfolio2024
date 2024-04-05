"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import Menu from "./components/menu";

export default function Home() {
  const [currentTab, setCurrentTab] = useState(0);
  useEffect(() => {
    console.log(currentTab);
  });
  return (
    <main className=" min-h-screen stretch flex gap-8 px-20 py-28 pb-10">
      <Sidebar />
      <Main currentTab={currentTab} />
      <Menu setCurrentTab={setCurrentTab} />
    </main>
  );
}
