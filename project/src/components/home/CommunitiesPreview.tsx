import React from 'react';
import { motion } from 'framer-motion';
import { Music, Palette, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommunitiesPreview = () => {
  const communities = [
    {
      icon: <Music className="w-8 h-8" />,
      name: "Music Lovers",
      members: 12453,
      description: "Share your passion for music, discover new artists, and connect with fellow musicians."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      name: "Creative Arts",
      members: 8921,
      description: "A space for artists, designers, and creative minds to collaborate and inspire."
    },
    {
      icon: <Code className="w-8 h-8" />,
      name: "Tech Innovators",
      members: 15678,
      description: "Connect with developers, entrepreneurs, and tech enthusiasts."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-purple-900 to-indigo-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Join Vibrant Communities
          </h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Connect with people who share your interests and passions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {communities.map((community, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-purple-400">{community.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{community.name}</h3>
                  <p className="text-purple-300">{community.members.toLocaleString()} members</p>
                </div>
              </div>
              <p className="text-purple-200">{community.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/communities">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition-all duration-300"
            >
              Explore All Communities
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunitiesPreview;