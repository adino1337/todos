const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
  try {
    let { email, password } = req.body;
    email = email.toLowerCase();

    if (!(email && password)) {
      res.status(400).json({code: 400, message: "All input is required"});
    }

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).json({code: 409, message:"User Already Exist. Please Login"});
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    let token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

    const userObject = user.toObject(); // Skonvertovať na plain JavaScript objekt
    userObject.token = token; // Pridať vlastnosť token

    res.status(201).json({code: 201, userObject});
  } catch (err) {
    res.status(500).json({code: 500, message: err.message});
  }
}


module.exports = register