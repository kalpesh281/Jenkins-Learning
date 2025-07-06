import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Features/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) return;
    dispatch(registerUser(formData));
    setFormData({
      name: "",
      email: "",
      age: "",
      password: "",
    });
  };

  useEffect(() => {
    if (user) {
      toast.success("Registration successful!");
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
        Register
      </h2>
      <div>
        <label className="block mb-1 text-gray-700 font-medium">Name</label>
        <input
          type="text"
          name="name"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
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
        <label className="block mb-1 text-gray-700 font-medium">Age</label>
        <input
          type="number"
          name="age"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your age"
          value={formData.age}
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
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
