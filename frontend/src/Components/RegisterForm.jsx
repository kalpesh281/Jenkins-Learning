import React from "react";

const RegisterForm = () => {
  return (
    <form className="max-w-md mx-auto mt-10 p-8 rounded flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-2">
        Register
      </h2>
      <div>
        <label className="block mb-1 text-gray-700 font-medium">Name</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label className="block mb-1 text-gray-700 font-medium">Email</label>
        <input
          type="email"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label className="block mb-1 text-gray-700 font-medium">Age</label>
        <input
          type="number"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your age"
        />
      </div>
      <div>
        <label className="block mb-1 text-gray-700 font-medium">Password</label>
        <input
          type="password"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
