import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Tailwind Test</h1>
      <button className="px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded shadow">
        Test Button
      </button>
      <p className="mt-6 text-gray-600">
        If you see styles, Tailwind is working!
      </p>
    </div>
  );
};

export default App;
