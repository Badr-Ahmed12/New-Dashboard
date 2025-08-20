"use client";
import { useState, useEffect } from "react";
import { Users, ShoppingBag, ClipboardList, Star, Mail, Phone } from "lucide-react";
import StatsCard from "./StatsCard";

export default function Cards() {
  const [stats, setStats] = useState([
    {
      title: "New Orders",
      value: 150,
      description: "Orders placed today",
      icon: <ShoppingBag className="w-5 h-5" />,
      bgColor: "#DBEAFE",
      textColor: "#1E40AF",
    },
    {
      title: "Active Users",
      value: 3200,
      description: "Currently online",
      icon: <Users className="w-5 h-5" />,
      bgColor: "#DCFCE7",
      textColor: "#166534",
    },
    {
      title: "Pending Tasks",
      value: 27,
      description: "Awaiting approval",
      icon: <ClipboardList className="w-5 h-5" />,
      bgColor: "#FEF9C3",
      textColor: "#854D0E",
    },
    {
      title: "Rating",
      value: 4.5,
      description: "Average rating",
      icon: <Star className="w-5 h-5" />,
      bgColor: "#FEE2C5",
      textColor: "#F97316",
    },
    {
      title: "New Messages",
      value: 12,
      description: "Unread messages",
      icon: <Mail className="w-5 h-5" />,
      bgColor: "#F7FAFC",
      textColor: "#1A202C",
    },
    {
      title: "New Calls",
      value: 5,
      description: "Missed calls",
      icon: <Phone className="w-5 h-5" />,
      bgColor: "#F8E4E4",
      textColor: "#F56565",
    },
  ]);

  // تحديث القيم كل 5 ثواني بشكل عشوائي
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) =>
        prev.map((item) => ({
          ...item,
          value: Math.floor(Math.random() * 1000), // قيمة جديدة عشوائية
        }))
      );
    }, 5000); // يحدث كل 5 ثواني

    return () => clearInterval(interval); // تنظيف
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((s, i) => (
        <StatsCard key={i} {...s} />
      ))}
    </div>
  );
}

