import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Edit2, MapPin, Link as LinkIcon, Calendar } from 'lucide-react';

const Profile = () => {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-purple-900">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="relative mb-8">
            <div className="h-48 rounded-t-2xl bg-gradient-to-r from-purple-600 to-indigo-600"></div>
            <div className="absolute -bottom-16 left-8">
              <div className="relative">
                <div className="w-32 h-32 bg-purple-400 rounded-full border-4 border-purple-900">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-0 right-0 bg-purple-600 p-2 rounded-full text-white hover:bg-purple-500"
                >
                  <Camera className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-lg text-white px-4 py-2 rounded-full hover:bg-white/20"
            >
              <Edit2 className="w-4 h-4 inline-block mr-2" />
              Edit Profile
            </motion.button>
          </div>

          {/* Profile Info */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 mt-12">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-white mb-2">Emma Thompson</h1>
              <p className="text-purple-300">Creative Designer & Digital Artist</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-2 text-purple-200">
                <MapPin className="w-5 h-5" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-200">
                <LinkIcon className="w-5 h-5" />
                <a href="#" className="hover:text-white">portfolio.com/emma</a>
              </div>
              <div className="flex items-center space-x-2 text-purple-200">
                <Calendar className="w-5 h-5" />
                <span>Joined March 2024</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">About Me</h2>
              <p className="text-purple-200">
                Passionate about creating meaningful digital experiences through design.
                I love collaborating with others and bringing creative ideas to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-white">1.2k</div>
                <div className="text-purple-300">Connections</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-white">48</div>
                <div className="text-purple-300">Communities</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-white">156</div>
                <div className="text-purple-300">Events Attended</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;