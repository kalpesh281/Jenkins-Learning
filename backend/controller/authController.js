const User = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const { Name, Email, Password, Age } = req.body;

    // Validate required fields
    if (!Name || !Email || !Password || !Age) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ Email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password and create user
    const hashedPassword = await bcrypt.hash(Password, 10);
    const newUser = await User.create({
      Name,
      Email,
      Age,
      Password: hashedPassword,
    });

    // Return success response
    res.status(201).json({
      message: "User created successfully",
      user: {
        Name: newUser.Name,
        Email: newUser.Email,
      },
    });
  } catch (error) {
    // console.log("Error during signup:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    // Validate required fields
    if (!Email || !Password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Find user by email
    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Verify password
    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "6h",
    });

    // Set cookie and return response
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
    });

    res.status(200).json({
      message: `Welcome back ${user.Name}`,
      user: {
        Name: user.Name,
        Email: user.Email,
        Age: user.Age,
      },
      token: token,
    });
  } catch (error) {
    // console.log("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  signup,
  login,
};
