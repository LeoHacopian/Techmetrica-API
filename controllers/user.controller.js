const User = require("../models/user.model")
const async = require("async")
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {

  try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = new User({
          email: req.body.email,
          username: req.body.username,
          password: hashedPassword,
      })

      console.log(user);

      try {
          const savedUser = await user.save();
          res.json({ success: true, userId: user._id });
      } catch (error) {
          res.status(500).json({ success: false, error: error.message });
      }

  } catch (error) {
      res.status(400).json({ success: false, error: error.message });
  }
}


exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find user by username
      const user = await User.findOne({ email });
  
      // If user is not found, return error message
      if (!user) {
        return res.status(401).json({ success: false, error: 'Invalid credentials' });
      }
  
      // Check if password is correct
      const isMatch = await user.comparePassword(password);
  
      if (!isMatch) {
        return res.status(401).json({ success: false, error: 'Invalid credentials' });
      }
  
      // Successful login
      return res.status(200).json({ success: true, userId: user._id });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
  