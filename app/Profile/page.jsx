"use client";
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Edit, User, Settings, Activity , Check } from "lucide-react";

export default function ProfilePage() {
  return (
    <Layout>
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-blue-500"
          />
          <div className="flex-1 space-y-2 text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-800">Badr Ahmed</h1>
            <p className="text-gray-600">Frontend & Mobile Developer</p>
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mx-auto md:mx-0">
              <Edit size={16} /> Edit Profile
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b  pb-2 text-gray-600 font-medium">
          <button className="cursor-pointer flex items-center gap-2 text-blue-600 ">
            <User size={18} /> Overview
          </button>
          <button className="cursor-pointer flex items-center gap-2 hover:text-blue-600">
            <Settings size={18} /> Settings
          </button>
          <button className="cursor-pointer flex items-center gap-2 hover:text-blue-600">
            <Activity size={18} /> Activity
          </button>
        </div>

        {/* Overview Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
            <h2 className="text-lg font-semibold text-gray-700">Personal Information</h2>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" /> badr@example.com
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-green-600" /> +20 100 123 4567
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-red-600" /> Cairo, Egypt
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
            <h2 className="text-lg font-semibold text-gray-700">Account Details</h2>
            <div className="space-y-3 text-gray-600">
              <p><span className="font-medium">Username:</span> badrahmed</p>
              <p><span className="font-medium">Member Since:</span> Jan 2023</p>
              <p><span className="font-medium">Role:</span> Admin</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">Recent Activity</h2>
          <ul className="space-y-3 text-gray-600">
            <li>✅ Logged in from new device - 2h ago</li>
            <li>📝 Updated profile information - 1 day ago</li>
            <li>📊 Viewed sales dashboard - 3 days ago</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
  );
}
