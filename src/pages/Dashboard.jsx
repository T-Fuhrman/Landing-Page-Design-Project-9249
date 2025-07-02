import React from 'react';
import GetStartedComponent from '../components/GetStartedComponent';
import Header from '../components/Header';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Your Dashboard
            </h1>
            <p className="text-xl text-gray-600">
              Let's get you started with your journey
            </p>
          </div>
          <GetStartedComponent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;