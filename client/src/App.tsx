import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            TarTech Website
          </h1>
          <p className="text-gray-600 mb-4">
            Welcome to the TarTech website built with Vite + Express.js
          </p>
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            ✅ Windows NODE_ENV compatibility fixed with cross-env!
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
