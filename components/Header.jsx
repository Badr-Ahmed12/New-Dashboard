"use client";
import { useState } from "react";
import { Menu, Bell, User, Search, Mail } from "lucide-react";
import Link from "next/link";

export default function Header({ onToggleSidebar }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-4 md:px-6 h-16">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
        </div>

        {/* Center Section (Search) */}
        <div className="hidden md:flex flex-1 justify-center px-6">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 relative">
          {/* Messages */}
          <div className="relative">
            <button
              onClick={() => {
                setShowMessages(!showMessages);
                setShowNotifications(false);
                setShowProfileMenu(false);
              }}
              className="relative p-2 rounded-lg hover:bg-gray-100"
            >
              <Mail className="w-5 h-5 text-gray-700" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-blue-500"></span>
            </button>

            {showMessages && (
              <div className="absolute right-0 mt-2 w-72 bg-white border rounded-lg shadow-lg overflow-hidden">
                <div className="p-3 border-b font-semibold">Messages</div>
                <ul className="max-h-60 overflow-y-auto">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-gray-500">Hey! How are you?</p>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <p className="text-sm font-medium">Jane Smith</p>
                    <p className="text-xs text-gray-500">Meeting tomorrow at 10</p>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowMessages(false);
                setShowProfileMenu(false);
              }}
              className="relative p-2 rounded-lg hover:bg-gray-100"
            >
              <Bell className="w-5 h-5 text-gray-700" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-72 bg-white border rounded-lg shadow-lg overflow-hidden">
                <div className="p-3 border-b font-semibold">Notifications</div>
                <ul className="max-h-60 overflow-y-auto">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <p className="text-sm">New user registered</p>
                    <p className="text-xs text-gray-500">2 mins ago</p>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <p className="text-sm">Server updated</p>
                    <p className="text-xs text-gray-500">10 mins ago</p>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => {
                setShowProfileMenu(!showProfileMenu);
                setShowNotifications(false);
                setShowMessages(false);
              }}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
            >
              <User className="w-6 h-6 text-gray-700" />
              <span className="hidden md:inline text-sm font-medium text-gray-700">
                Profile
              </span>
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg overflow-hidden">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><Link  href="/profile">My Profile</Link></li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600">Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
