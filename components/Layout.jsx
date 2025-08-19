"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      </div>
    </div>
  );
}
