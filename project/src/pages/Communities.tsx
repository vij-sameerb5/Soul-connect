import React from 'react';
import { motion } from 'framer-motion';
import { Users, Music, Palette, Code, Book, Dumbbell } from 'lucide-react';

const Communities = () => {
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
    },
    {
      icon: <Book className="w-8 h-8" />,
      name: "Book Club",
      members: 6789,
      description: "Discuss your favorite books and discover new literary adventures."
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      name: "Fitness & Wellness",
      members: 10234,
      description: "Share fitness tips, workout routines, and wellness advice."
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
            Find Your Community
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Join vibrant communities of like-minded individuals who share your interests and passions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communities.map((community, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-purple-400">{community.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{community.name}</h3>
                  <p className="text-purple-300">{community.members.toLocaleString()} members</p>
                </div>
              </div>
              <p className="text-purple-200">{community.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-500 transition-colors duration-300"
              >
                Join Community
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Communities;