import Image from "next/image";
import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <main className="bg-cyan-500 min-h-screen ">
      <Sidebar />
    </main>
  );
}
