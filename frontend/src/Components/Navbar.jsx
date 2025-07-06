import React from "react";
import { LogOut } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 shadow-lg rounded-b-2xl">
      {/* Left: Empty for spacing */}
      <div className="w-10" />
      {/* Center: Title */}
      <div className="text-3xl font-extrabold text-white tracking-wide drop-shadow-lg select-none text-center flex-1">
        My Application
      </div>
      {/* Right: Logout Icon */}
      <button
        className="p-2 rounded-full cursor-pointer transition bg-transparent hover:bg-blue-100 group"
        title="Logout"
      >
        <LogOut
          size={26}
          className="text-blue-600 transition-colors duration-200 group-hover:text-purple-700"
        />
      </button>
    </nav>
  );
};

export default Navbar;
