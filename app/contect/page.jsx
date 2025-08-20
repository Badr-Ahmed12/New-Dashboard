"use client";
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <Layout>
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Got a question, feedback, or just want to say hello? Reach out to us anytime and we’ll get back to you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
            <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
              <Send className="text-blue-600" /> Send a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
              <h2 className="text-xl font-semibold text-gray-700">Contact Information</h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-600" /> support@dashboard.com
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-green-600" /> +20 100 123 4567
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-red-600" /> Cairo, Egypt
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Follow Us</h2>
              <div className="flex gap-5 text-gray-500">
                <a href="#" className="hover:text-gray-900"><Github size={24} /></a>
                <a href="#" className="hover:text-blue-600"><Linkedin size={24} /></a>
                <a href="#" className="hover:text-sky-500"><Twitter size={24} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-10 border-t text-gray-500 text-sm">
          © 2025 Dashboard Inc. All rights reserved.
        </div>
      </div>
    </div>
    </Layout>
  );
}
