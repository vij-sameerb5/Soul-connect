import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users2, Sparkles, Shield, Brain, Palette } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Secure Messaging",
      description: "End-to-end encrypted messaging ensures your conversations remain private and secure. Share text, images, and files with confidence."
    },
    {
      icon: <Users2 className="w-12 h-12" />,
      title: "Smart Matching",
      description: "Our AI-powered algorithm analyzes your interests, values, and behavior to suggest meaningful connections that truly resonate with you."
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Interactive Profiles",
      description: "Create stunning 3D avatars and customize your profile with rich media content to express your authentic self."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Privacy Controls",
      description: "Granular privacy settings give you complete control over who can view your profile and interact with you."
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Personality Insights",
      description: "Advanced personality analysis helps you understand yourself better and find compatible connections."
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Creative Expression",
      description: "Share your stories, artwork, and creative projects with like-minded individuals in your community."
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
            Powerful Features for Meaningful Connections
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Discover all the tools and features designed to help you build authentic relationships
            and find your community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-purple-400 mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-purple-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;