import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Features/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",

    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) return;
    dispatch(loginUser(formData));
    setFormData({
      email: "",

      password: "",
    });
  };

  useEffect(() => {
    if (user) {
      toast.success("Login successful!");
      navigate("/home");
    }
    if (error) {
      toast.error(error);
    }
  }, [user, error, navigate]);

  return (
    <form
      className="max-w-md mx-auto mt-10 p-8 rounded flex flex-col gap-6"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-2">
        Login
      </h2>

      <div>
        <label className="block mb-1 text-gray-700 font-medium">Email</label>
        <input
          type="email"
          name="email"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block mb-1 text-gray-700 font-medium">Password</label>
        <input
          type="password"
          name="password"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
