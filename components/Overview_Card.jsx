"use client";
import { ArrowUpRight, ArrowDownRight, RefreshCcw, ShoppingCart, Users } from "lucide-react";

export default function OverviewCard() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
      <h2 className="text-lg font-semibold text-gray-800">Online Store Overview</h2>

      {/* Conversion Rate */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-green-100 text-green-600">
            <RefreshCcw size={20} />
          </div>
        </div>
        <div className="text-right">
          <p className="flex items-center justify-end gap-1 text-green-600 font-semibold">
            <ArrowUpRight size={16} /> 12%
          </p>
          <p className="text-sm text-gray-500">CONVERSION RATE</p>
        </div>
      </div>

      <hr />

      {/* Sales Rate */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-yellow-100 text-yellow-600">
            <ShoppingCart size={20} />
          </div>
        </div>
        <div className="text-right">
          <p className="flex items-center justify-end gap-1 text-yellow-600 font-semibold">
            <ArrowUpRight size={16} /> 0.8%
          </p>
          <p className="text-sm text-gray-500">SALES RATE</p>
        </div>
      </div>

      <hr />

      {/* Registration Rate */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-red-100 text-red-600">
            <Users size={20} />
          </div>
        </div>
        <div className="text-right">
          <p className="flex items-center justify-end gap-1 text-red-600 font-semibold">
            <ArrowDownRight size={16} /> 1%
          </p>
          <p className="text-sm text-gray-500">REGISTRATION RATE</p>
        </div>
      </div>
    </div>
  );
}
