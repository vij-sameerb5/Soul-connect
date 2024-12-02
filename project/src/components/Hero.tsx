import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Calendar } from 'lucide-react';
import Scene3D from './Scene3D';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0">
        <Scene3D />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold text-white mb-6">
            Connect. Share. Grow Together.
          </h1>
          <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
            Discover meaningful connections based on shared interests, values, and goals.
            Join a community that celebrates authentic relationships.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Journey
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {[
            {
              icon: <Heart className="w-8 h-8" />,
              title: "Meaningful Connections",
              description: "Find people who share your passions and values"
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Vibrant Communities",
              description: "Join groups that align with your interests"
            },
            {
              icon: <Calendar className="w-8 h-8" />,
              title: "Exciting Events",
              description: "Participate in events that matter to you"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center"
            >
              <div className="text-white mb-4 inline-block">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-purple-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;