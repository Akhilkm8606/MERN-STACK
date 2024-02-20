const User = require("../model/userModel/user");
const bcrypt = require("bcrypt");
const saltround = 10;

exports.getSignUp = async (req, res) => {
    res.send("Welcome to the sign-up page");
};

exports.postSignUp = async (req, res) => {

    const { fullname, email, password } = req.body;
    try {
        // Check if password is provided

        if (!password) {
            return res.status(400).json({
                success: false,
                message: "Password is required"
            });
         
        }

        console.log(!password);
        // Hash the password with the specified number of salt rounds
        const hashedPass = await bcrypt.hash(password, saltround);

        // Log the hashed password
        console.log("Hashed password:", hashedPass);

        // Create user with hashed password
        const user = await User.create({
            fullname,
            email,
            password: hashedPass
        });

        // Check if user was created successfully
        if (!user) {
            return res.status(500).json({
                success: false,
                message: "User registration failed"
            });
        }
        res.status(201).json({

            success: true,
            message: "Registration successful!",
            isAuthenticated: true,
            user: {
                fullname: user.fullname,
                email: user.email,
                // Note: Avoid sending the password in response for security reasons
            }
        });

        console.log(user, "<_______");
    } catch (error) {
        // Handle any errors that occur during registration
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.getLogin = async (req, res) => {
    res.send("Welcome to the Login page");
};
exports.postLogin = async (req, res) => {
   const {email,password} =req.body
   try {
    const user = await User.findOne({email})
    if (!user) {
        return res.status(500).json({
            success: false,
            message: "User not found"
        });
        
    }

    const paswordMatch = await bcrypt.compare(password,user.password)
    if (!paswordMatch) {
        return res.status(500).json({
            success: false,
            message: "invalid creadential"
        });
        
    }
    res.status(200).json({
        success: true,
        message: "Login successful"
    });
   } catch (error) {
    res.status(500).json({
        success: false,
        message: "login field"
    });
    
   }
};

