"use client";
import Layout from "@/components/Layout";
import { Users, Target, Award, Github, Linkedin, Briefcase, Star, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <Layout>
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">About Our Dashboard</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This dashboard was designed to provide powerful insights and a smooth user experience.
            We combine modern design with real-time analytics to help you make smarter decisions.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Active Users", value: "12,500+", icon: <Users className="text-blue-600" size={28} /> },
            { title: "Projects", value: "350+", icon: <Briefcase className="text-green-600" size={28} /> },
            { title: "Awards", value: "15", icon: <Award className="text-yellow-500" size={28} /> },
            { title: "Growth", value: "120%", icon: <TrendingUp className="text-purple-600" size={28} /> },
          ].map((card, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="flex justify-center mb-3">{card.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800">{card.value}</h3>
              <p className="text-sm text-gray-500">{card.title}</p>
            </div>
          ))}
        </div>

        {/* Mission / Vision */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center gap-3 mb-3">
              <Target className="text-blue-600" />
              <h2 className="text-lg font-semibold">Our Mission</h2>
            </div>
            <p className="text-gray-600">
              Empower businesses with intelligent dashboards that are both functional and visually stunning.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center gap-3 mb-3">
              <Star className="text-green-600" />
              <h2 className="text-lg font-semibold">Our Vision</h2>
            </div>
            <p className="text-gray-600">
              To be the go-to platform for interactive analytics and modern dashboard solutions worldwide.
            </p>
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Ahmed Salah", role: "Frontend Developer", avatar: "https://i.pravatar.cc/150?img=32" },
              { name: "Mona Ali", role: "UI/UX Designer", avatar: "https://i.pravatar.cc/150?img=47" },
              { name: "Omar Hassan", role: "Backend Engineer", avatar: "https://i.pravatar.cc/150?img=12" },
            ].map((member, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 text-center space-y-4 hover:shadow-lg transition">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto border-2 border-gray-200"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
                <div className="flex justify-center gap-4 text-gray-500">
                  <a href="#" className="hover:text-gray-800"><Github size={18} /></a>
                  <a href="#" className="hover:text-blue-600"><Linkedin size={18} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t text-gray-500 text-sm">
          © 2025 Dashboard Inc. All rights reserved.
        </div>
      </div>
    </div>
    </Layout>
  );
}
