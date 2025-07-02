import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: '10M+', label: 'Projects Created', suffix: '' },
  { number: '99.9', label: 'Uptime Guarantee', suffix: '%' },
  { number: '150+', label: 'Countries Served', suffix: '' },
  { number: '24/7', label: 'Expert Support', suffix: '' }
];

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by Millions
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join the growing community of innovators who trust our platform
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-6xl font-bold text-white mb-2">
                {stat.number}
                <span className="text-blue-200">{stat.suffix}</span>
              </div>
              <div className="text-blue-100 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;