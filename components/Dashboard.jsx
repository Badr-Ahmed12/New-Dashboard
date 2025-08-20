"use client";
import { useState, useEffect } from "react";
import { Line, Bar, Doughnut, Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

export default function DashboardCharts() {
  const [visitors, setVisitors] = useState([100, 120, 160, 170, 165, 175, 170, 160]);
  const [lastWeekVisitors, setLastWeekVisitors] = useState([70, 80, 75, 72, 74, 79, 76, 95]);

  const [sales, setSales] = useState([1000, 2000, 3000, 2500, 2700, 2400, 2900]);
  const [lastYearSales, setLastYearSales] = useState([800, 1600, 2800, 2200, 2100, 1800, 2000]);

  const [categories, setCategories] = useState([3500, 2500, 1500, 1000]);
  const [kpis, setKpis] = useState([80, 90, 85, 70, 95]);

  // دالة لتحديث البيانات عشوائياً
  const randomizeData = () => {
    setVisitors(visitors.map(v => v + Math.floor(Math.random() * 40 - 20)));
    setLastWeekVisitors(lastWeekVisitors.map(v => v + Math.floor(Math.random() * 20 - 10)));

    setSales(sales.map(v => v + Math.floor(Math.random() * 800 - 400)));
    setLastYearSales(lastYearSales.map(v => v + Math.floor(Math.random() * 500 - 250)));

    setCategories(categories.map(v => v + Math.floor(Math.random() * 500 - 250)));
    setKpis(kpis.map(v => Math.min(100, Math.max(40, v + Math.floor(Math.random() * 15 - 7)))));
  };

  // Auto update كل 5 ثواني
  useEffect(() => {
    const interval = setInterval(randomizeData, 5000);
    return () => clearInterval(interval);
  });

  // Line Chart - Visitors
  const visitorsData = {
    labels: ["18th", "20th", "22nd", "24th", "26th", "28th", "30th"],
    datasets: [
      {
        label: "This Week",
        data: visitors,
        borderColor: "#2563eb",
        backgroundColor: "rgba(37, 99, 235, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Last Week",
        data: lastWeekVisitors,
        borderColor: "#9ca3af",
        backgroundColor: "rgba(156, 163, 175, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Bar Chart - Sales
  const salesData = {
    labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "This Year",
        data: sales,
        backgroundColor: "#2563eb",
      },
      {
        label: "Last Year",
        data: lastYearSales,
        backgroundColor: "#9ca3af",
      },
    ],
  };

  // Doughnut Chart - Categories
  const doughnutData = {
    labels: ["Electronics", "Clothes", "Accessories", "Others"],
    datasets: [
      {
        label: "Sales by Category",
        data: categories,
        backgroundColor: ["#2563eb", "#16a34a", "#facc15", "#9ca3af"],
      },
    ],
  };

  // Radar Chart - KPIs
  const radarData = {
    labels: ["Performance", "Speed", "Quality", "Support", "Reliability"],
    datasets: [
      {
        label: "This Year",
        data: kpis,
        backgroundColor: "rgba(37, 99, 235, 0.2)",
        borderColor: "#2563eb",
        pointBackgroundColor: "#2563eb",
      },
      {
        label: "Last Year",
        data: [70, 75, 78, 60, 85],
        backgroundColor: "rgba(156, 163, 175, 0.2)",
        borderColor: "#9ca3af",
        pointBackgroundColor: "#9ca3af",
      },
    ],
  };

  return (
    <div className="space-y-8">
      {/* زرار Refresh */}
      <button
        onClick={randomizeData}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Refresh Data
      </button>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Visitors Line Chart */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">
            Online Store Visitors
          </h2>
          <Line data={visitorsData} />
        </div>

        {/* Sales Bar Chart */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">
            Sales
          </h2>
          <Bar data={salesData} />
        </div>

        {/* Doughnut Chart */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">
            Sales by Category
          </h2>
          <Doughnut data={doughnutData} />
        </div>

        {/* Radar Chart */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">
            KPIs Comparison
          </h2>
          <Radar data={radarData} />
        </div>
      </div>
    </div>
  );
}
