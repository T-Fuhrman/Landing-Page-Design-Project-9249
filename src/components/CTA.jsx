import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiCheck } = FiIcons;

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Building?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of innovators who are already transforming their ideas into reality.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Free 14-day trial',
                'No credit card required',
                'Cancel anytime',
                '24/7 expert support'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiCheck} className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <span>Start Your Free Trial</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Monthly Revenue</span>
                  <span className="text-2xl font-bold text-green-500">+127%</span>
                </div>
                
                <div className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-end justify-center p-4">
                  <div className="flex items-end space-x-2">
                    {[40, 65, 45, 80, 95, 75, 100].map((height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="w-6 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t"
                      />
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">2.4K</div>
                    <div className="text-sm text-gray-500">Users</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">18.2K</div>
                    <div className="text-sm text-gray-500">Sessions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">94%</div>
                    <div className="text-sm text-gray-500">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;