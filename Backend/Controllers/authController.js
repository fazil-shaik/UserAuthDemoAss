const jwt = require('jsonwebtoken');
const User = require('../Models/User');

exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    await User.createUser(username, password);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Username already exists' });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findByUsername(username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid username or password');
    }
    const token = jwt.sign({ userId: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

exports.protectedRoute = (req, res) => {
  res.json({ message: 'Welcome to the dashboard' });
};

exports.logout = (req, res) => {
  res.json({ message: 'Logged out successfully' });
};
