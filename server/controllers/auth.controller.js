import User from "../models/user.models.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import Jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler("User not found!", 404));

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler("Wrong credentials", 400));

    const token = Jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {
      expiresIn: "20d",
    });
    /// not returning the password
    const { password: hashedPassword, ...others } = validUser._doc;

    res.cookie("access_token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000),
    });

    res.status(200).json(others);
  } catch (error) {
    next(error);
  }
};
