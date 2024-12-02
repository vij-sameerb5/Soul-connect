import React from 'react';
import { motion } from 'framer-motion';
import { Send, Smile, Paperclip, Search } from 'lucide-react';

const Messaging = () => {
  const contacts = [
    { id: 1, name: "Sarah Wilson", status: "online", lastMessage: "That sounds great!" },
    { id: 2, name: "Michael Chen", status: "offline", lastMessage: "See you tomorrow!" },
    { id: 3, name: "Emma Thompson", status: "online", lastMessage: "Thanks for sharing!" }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-purple-900">
      <div className="container mx-auto px-6 py-8">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4">
            {/* Contacts Sidebar */}
            <div className="md:col-span-1 border-r border-white/10">
              <div className="p-4">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search contacts..."
                    className="w-full bg-white/5 text-white rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="space-y-2">
                  {contacts.map((contact) => (
                    <motion.div
                      key={contact.id}
                      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                      className="p-3 rounded-lg cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="w-10 h-10 bg-purple-400 rounded-full"></div>
                          <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${
                            contact.status === 'online' ? 'bg-green-400' : 'bg-gray-400'
                          }`}></div>
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{contact.name}</h4>
                          <p className="text-purple-300 text-sm">{contact.lastMessage}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="md:col-span-3 h-[calc(100vh-12rem)]">
              <div className="flex flex-col h-full">
                {/* Chat Header */}
                <div className="p-4 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-400 rounded-full"></div>
                    <div>
                      <h3 className="text-white font-medium">Sarah Wilson</h3>
                      <p className="text-purple-300 text-sm">Online</p>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {/* Message bubbles would go here */}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-white/10">
                  <div className="flex items-center space-x-4">
                    <button className="text-purple-300 hover:text-white">
                      <Paperclip className="w-6 h-6" />
                    </button>
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 bg-white/5 text-white rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button className="text-purple-300 hover:text-white">
                      <Smile className="w-6 h-6" />
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-500"
                    >
                      <Send className="w-6 h-6" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messaging;