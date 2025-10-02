"use client";
import { useState } from "react";
import { Star, Trash2, Reply } from "lucide-react";
import Layout from "@/components/Layout";

const messagesData = [
  {
    id: 1,
    sender: "Ali Mohamed",
    subject: "Project Update",
    preview: "Hey Badr, I’ve updated the project files...",
    time: "2h ago",
    content:
      "Hey Badr 👋,\n\nI’ve updated the project files with the latest changes. Please review and let me know your feedback.\n\nThanks!"
  },
  {
    id: 2,
    sender: "Sara Ahmed",
    subject: "Meeting Reminder",
    preview: "Don’t forget tomorrow’s meeting at 10AM.",
    time: "5h ago",
    content:
      "Hi Badr,\n\nThis is a reminder that we have the meeting scheduled for tomorrow at 10AM. Don’t be late 😅."
  },
  {
    id: 3,
    sender: "HR Department",
    subject: "Leave Approval",
    preview: "Your leave request has been approved.",
    time: "1d ago",
    content:
      "Hello,\n\nWe are glad to inform you that your leave request has been approved for the dates 22nd - 25th of August."
  }, {
    id: 4,
    sender: "Ibrahiem Ahmed",
    subject: "Friend",
    preview: "Lorem ipsum dolor sit amet, consectetur",
    time: "1d ago",
    content:
      "Hey Badr 👋,\n\n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla veritatis impedit "
  }

];

export default function MessagesPage() {
  const [selectedMessage, setSelectedMessage] = useState(messagesData[0]);

  return (
    <Layout>
    <h1 className="text-4xl font-bold mb-6 font-sans">Massages Dashboard</h1>
    <div className="flex flex-col h-screen bg-gray-50">
           
      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Messages List */}
        <div className="w-1/3 bg-white   overflow-y-auto">
          {messagesData.map((msg) => (
            <div
              key={msg.id}
              onClick={() => setSelectedMessage(msg)}
              className={`p-4 cursor-pointer transition m-5  shadow border-l-4 ${
                selectedMessage.id === msg.id
                  ? "bg-blue-50 border-l-4 border-blue-600"
                  : "hover:bg-gray-50"
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-semibold text-gray-600">{msg.sender}</h3>
                <span className="text-xs text-gray-400">{msg.time}</span>
              </div>
              <p className="text-sm font-medium text-gray-700">{msg.subject}</p>
              <p className="text-xs text-gray-500 truncate">{msg.preview}</p>
            </div>
          ))}
        </div>

        {/* Message View */}
        <div className="flex-1 bg-gray-50 p-6 overflow-y-auto">
          {selectedMessage ? (
            <div className="bg-white shadow-md rounded-xl p-6 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-bold text-gray-600">
                    {selectedMessage.subject}
                  </h2>
                  <p className="text-sm text-gray-500">{selectedMessage.sender}</p>
                </div>
                <div className="flex gap-3">
                  <button className="p-2 rounded-lg hover:bg-gray-100">
                    <Reply size={18} className="text-gray-600" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-gray-100">
                    <Star size={18} className="text-yellow-500" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-gray-100">
                    <Trash2 size={18} className="text-red-500" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto text-gray-700 whitespace-pre-line leading-relaxed">
                {selectedMessage.content}
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-400">
              Select a message to view
            </div>
          )}
        </div>
      </div>
    </div>
 </Layout>
  );
}
