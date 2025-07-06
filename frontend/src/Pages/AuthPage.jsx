import React, { useState, useEffect } from "react";
import RegisterForm from "../Components/RegisterForm";
import LoginForm from "../Components/LoginForm";
import { motion } from "framer-motion";

const typingTexts = [
  "Welcome to My Application!",
  "Register or Login to continue.",
  "Experience the best with us.",
];

const TypingAnimation = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < typingTexts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + typingTexts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 60);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % typingTexts.length);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  return (
    <motion.h1
      className="text-3xl md:text-5xl font-extrabold text-blue-700"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </motion.h1>
  );
};

const AuthPage = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="min-h-screen flex bg-blue-50">
      {/* Left Side - 60% */}
      <div className="hidden md:flex flex-col justify-center items-center w-3/5 px-8">
        <TypingAnimation />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-8 text-lg text-blue-900 text-center"
        >
          Secure, Fast, and Reliable.
        </motion.div>
      </div>
      {/* Right Side - 40% */}
      <div className="flex flex-col justify-center items-center w-full md:w-2/5 min-h-screen">
        <div className="w-full max-w-lg">
          {showRegister ? <RegisterForm /> : <LoginForm />}
          <div className="text-center mt-4">
            {showRegister ? (
              <span>
                Already have an account?{" "}
                <button
                  className="text-blue-600 hover:underline font-semibold"
                  onClick={() => setShowRegister(false)}
                >
                  Login
                </button>
              </span>
            ) : (
              <span>
                Don&apos;t have an account?{" "}
                <button
                  className="text-blue-600 hover:underline font-semibold"
                  onClick={() => setShowRegister(true)}
                >
                  Register
                </button>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
