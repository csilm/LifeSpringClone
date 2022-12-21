const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const UserModel = require("../models/userModel");

// create token
const createToken = (_id) => {
  return jwt.sign({ _id }, `${process.env.ACCESS_TOKEN_SECRET}`, {
    expiresIn: "3d",
  });
};

// secure password method
const securePassword = async (password) => {
  try {
    const passwordHash = await bcrypt.hash(password, 10);
    return passwordHash;
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// signup controller
const signupUser = async (req, res) => {
  // get info from body/user
  const { email, password, name, mobile, role } = req.body;

  console.log(req.body);
  try {
    const user = await UserModel.signup(email, password, name, mobile, role);
    const token = createToken(user._id);

    res.status(200).json({ email, token, role });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// login controller
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);

    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const userProfile = async (req, res) => {
  try {
    const user_id = req.user;
    const userProfile = await UserModel.findById(user_id).select("-password");
    res.status(200).json(userProfile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update user info
const updateUser = async (req, res) => {
  const user_id = req.user;
  const { email, name, mobile, about, profile } = req.body;
  try {
    const user = await UserModel.findOneAndUpdate(
      user_id,
      {
        name,
        mobile,
        about,
        profile,
      },
      {
        returnOriginal: false,
      }
    ).select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// change password
const changePassword = async (req, res) => {
  try {
    const user_id = req.user;
    const password = req.body.password;

    const newPassword = await securePassword(password);

    const user = await UserModel.findOneAndUpdate(user_id, {
      password: newPassword,
    });
    res.status(200).json({ message: "Password change successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// export modules
module.exports = {
  signupUser,
  loginUser,
  userProfile,
  updateUser,
  changePassword,
};
