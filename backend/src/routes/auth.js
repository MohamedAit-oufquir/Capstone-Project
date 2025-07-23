import express from 'express';
import User from '../models/User';


const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      email: req.body.email,
      password: hashedPassword,
      name: req.body.name,
    });
    await user.save();
    res.status(201).json({ message: 'User created' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ message: 'User not found' });

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).json({ message: 'Invalid password' });

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
});

export default router;










