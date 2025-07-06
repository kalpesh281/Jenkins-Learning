import React from "react";
import { motion } from "framer-motion";
import { User, Mail, Calendar } from "lucide-react";
import { useSelector } from "react-redux";

const dummyUser = {
  name: "Jony Test",
  age: 28,
  email: "jony@example.com",
};

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } },
  hover: { scale: 1.03, boxShadow: "0 8px 32px 0 rgba(80,80,200,0.10)" },
};

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return (
      <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-blue-50">
        <div className="text-xl text-gray-600">Not logged in.</div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-blue-50">
      <motion.div
        className="relative bg-gradient-to-br from-blue-100 via-purple-100 to-yellow-50 rounded-3xl shadow-2xl p-10 w-full max-w-md flex flex-col gap-8 border border-blue-100"
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        {/* User Details */}
        <div className="flex flex-col items-center gap-4">
          <User size={48} className="text-blue-700 drop-shadow" />
          <span className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-wide">
            {user.Name}
          </span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex items-center gap-3 text-lg">
            <Mail size={22} className="text-purple-700" />
            <a
              href={`mailto:${user.Email}`}
              className="text-blue-700 hover:underline font-medium"
            >
              {user.Email}
            </a>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <Calendar size={22} className="text-yellow-600" />
            <span className="text-yellow-800 font-medium">Age: {user.Age}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
