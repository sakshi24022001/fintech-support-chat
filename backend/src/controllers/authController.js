import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/token.js";

export const seedUser = async () => {
  const exists = await User.findOne({ email: "test@chat.com" });
  if (exists) return;

  const hashedPassword = await bcrypt.hash("123456", 10);

  await User.create({
    name: "Test User",
    email: "test@chat.com",
    password: hashedPassword, // ✅ hashed
  });

  console.log("✅ Test user created");
};


export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user)
    return res.status(401).json({ message: "Invalid credentials" });

  const match = await bcrypt.compare(password, user.password);
  if (!match)
    return res.status(401).json({ message: "Invalid credentials" });

  res.json({
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token: generateToken(user),
  });
};
