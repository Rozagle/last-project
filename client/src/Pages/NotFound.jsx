/* eslint-disable no-unused-vars */
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <h1 className="text-6xl font-extrabold text-gray-900 mb-4">404</h1>
      <p className="text-lg mb-6">Sorry, we couldn’t find the page you’re looking for.</p>
      <a href="/" className="text-blue-600 hover:text-blue-800 text-lg font-medium">Back to Home</a>
    </div>
  );
};

export default NotFound;
