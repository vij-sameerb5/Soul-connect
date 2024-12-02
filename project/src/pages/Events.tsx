import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "Tech Meetup 2024",
      date: "March 15, 2024",
      time: "6:00 PM",
      location: "San Francisco, CA",
      attendees: 234,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      category: "Technology"
    },
    {
      title: "Art Gallery Opening",
      date: "March 20, 2024",
      time: "7:00 PM",
      location: "New York, NY",
      attendees: 156,
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80",
      category: "Art"
    },
    {
      title: "Wellness Workshop",
      date: "March 25, 2024",
      time: "10:00 AM",
      location: "Los Angeles, CA",
      attendees: 89,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
      category: "Health"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-purple-900">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            Upcoming Events
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Discover and join exciting events happening in your community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                  {event.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">{event.title}</h3>
                <div className="space-y-2 text-purple-200">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-500 transition-colors duration-300"
                >
                  Join Event
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;