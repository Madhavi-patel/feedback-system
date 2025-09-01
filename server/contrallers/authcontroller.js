// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const Usermodel = require("../models/user");

// const signup = async (req, res) => {
//     try {
//         const { firstname, lastname, enrolmentno, course, email, password } = req.body;
//         const User= await Usermodel.findOne({email});
//         if(!User){
//             return res.status(403).json({message: 'User is already exist , you can login', success:false});
//         }
//         const newUser = new Usermodel({
//             firstname,
//             lastname,
//             enrolmentno,
//             course,
//             semester,
//             email,
//             password
//         });
//         newUser.password=await bcrypt.hash(password, 10);
//         await newUser.save();

//         res.status(201).json({ message: 'User registered successfully' , success: true});
//     } catch (error) {
//         res.status(500).json({ message: 'Internal server error' , success: false});
//     }
// }

// const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const User= await Usermodel.findOne({email});
//         const errorMsg = 'auth failed email or password wrong.';
//         if(!User){
//             return res.status(403).json({message: errorMsg, success:false});
//         }
//         const newUser = new Usermodel({
//             email,
//             password
//         });
//         newUser.password=await bcrypt.hash(password, 10);
//         await newUser.save();
//         const isPassEqual = await bcrypt.compare(password, User.password);
//         if(!isPassEqual){
//             return res.status(403).json({message: errorMsg, success:false});
//         }
//         const jwtoken = await jwt.sign({email: User.email, id: User._id },
//             process.env.JWT_SECRET,
//             { expiresIn: '24h' });

//         res.status(200).json({ message: 'User logged in successfully', success: true, token: jwtoken });
//     } catch (error) {
//         res.status(500).json({ message: 'Internal server error', success: false });
//     }
// }
// module.exports = {
//   signup,
//   login
// }   