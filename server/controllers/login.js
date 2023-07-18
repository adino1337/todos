const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    try {
        // Get user input
        let { email, password } = req.body;
        email = email.toLowerCase();
        // Validate user input
        if (!(email && password)) {
          res.status(400).json({code:400,userObject: {}, message: "All input is required"});
        }
        // Validate if user exist in our database
        const user = await User.findOne({ email });
    
        if (user && (await bcrypt.compare(password, user.password))) {
          // Create token
          const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
          );
    
          const userObject = user.toObject(); // Skonvertovať na plain JavaScript objekt
    userObject.token = token; // Pridať vlastnosť token

    return res.status(200).json({code: 200, userObject, message: ""});
        }
        return res.status(400).json({code:400,userObject:{}, message: "Invalid Credentials"});
      } catch (err) {
        return res.status(500).json({code: 500,userObject:{}, message: err.message})
      }
}


module.exports = login