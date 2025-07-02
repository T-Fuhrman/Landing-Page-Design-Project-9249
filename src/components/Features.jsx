import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiZap, FiShield, FiTrendingUp, FiUsers, FiGlobe, FiLock } = FiIcons;

const features = [
  {
    icon: FiZap,
    title: 'Lightning Fast',
    description: 'Built for speed with cutting-edge technology that delivers results in milliseconds.',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: FiShield,
    title: 'Enterprise Security',
    description: 'Bank-level security with end-to-end encryption and compliance certifications.',
    color: 'from-green-400 to-blue-500'
  },
  {
    icon: FiTrendingUp,
    title: 'Scalable Growth',
    description: 'Grow from startup to enterprise with our infinitely scalable infrastructure.',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: FiUsers,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with real-time collaboration and smart workflows.',
    color: 'from-blue-400 to-purple-500'
  },
  {
    icon: FiGlobe,
    title: 'Global Reach',
    description: 'Deploy worldwide with our global CDN and multi-region infrastructure.',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    icon: FiLock,
    title: 'Data Privacy',
    description: 'Your data stays yours with complete privacy controls and GDPR compliance.',
    color: 'from-red-400 to-pink-500'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Greta</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the features that make us the preferred choice for forward-thinking teams
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <SafeIcon icon={feature.icon} className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;