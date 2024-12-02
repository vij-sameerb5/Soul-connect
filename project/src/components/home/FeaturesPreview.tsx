import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturesPreview = () => {
  const features = [
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Secure Messaging",
      description: "Connect privately with matches through our encrypted messaging system"
    },
    {
      icon: <Users2 className="w-12 h-12" />,
      title: "Smart Matching",
      description: "Our AI-powered algorithm finds your perfect connections"
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Interactive Profiles",
      description: "Create engaging profiles with our 3D customization tools"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-indigo-900 to-purple-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Discover Amazing Features
          </h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Experience a new way of connecting with people through our innovative features
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-purple-400 mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-purple-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/features">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition-all duration-300"
            >
              Explore All Features
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesPreview;