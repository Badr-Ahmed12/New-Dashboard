"use client";
import { useState } from "react";
import { Home, Info, Phone, Menu, X, LucideIcon , UserRound , Mail  } from "lucide-react";
import { usePathname } from "next/navigation";



// مكون NavItem منفصل
function NavItem({ href, label, icon: Icon, active, isOpen }) {
  return (
    <a
      href={href}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
        active
          ? "bg-blue-700 text-white shadow-md"
          : "hover:bg-blue-600 text-gray-200"
      }`}
    >
      <Icon className="w-5 h-5 shrink-0" />
      {isOpen && <span className="font-medium">{label}</span>}
    </a>
  );
}

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: Info },
    { href: "/contact", label: "Contact", icon: Phone },
    { href: "/profile", label: "Profile", icon: UserRound },
    { href: "/Massages", label: "Massages", icon: Mail }
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed md:static z-50 h-screen bg-gradient-to-b from-blue-600 to-blue-900 text-white flex flex-col shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b border-blue-500">
          {isOpen && (
            <h2 className="text-lg font-bold tracking-wide ml-4">
              <span className="text-blue-300">My</span> Dashboard
            </h2>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg ml-2 hover:bg-blue-700 transition"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 " />}
          </button>
        </div>

        {/* Nav */}
        <ul className="flex-1 p-4 space-y-2 overflow-y-auto scrollbar-hide">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavItem
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={pathname === item.href}
                isOpen={isOpen}
              />
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="p-4 border-t border-blue-500 text-xs text-center text-gray-300">
          {isOpen ? "© 2025 My App" : "©"}
        </div>
      </div>

      {/* Overlay للموبايل */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
