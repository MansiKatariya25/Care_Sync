const User = require("../Models/User");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;
module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).send("Data not found");
    }
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).send("User not found");
    }
    const nemail = { email: email };
    const expire = { expiresIn: "2h" };
    const token =  JWT.sign(nemail, secret, expire);
    const pass =  bcrypt.compare(password, user.password);
    if (!pass) {
      return res.status(500).send("Incorrect Password");
    }
    res.status(200).send({ msg: "Login Successfully", token: token });
  } catch (error) {
    return res.status(503).send(error);
  }
};

module.exports.signup = async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;
    if (!fname || !lname || !email || !password) {
      return res.status(404).send("Data not found");
    }
    const hashpass = await bcrypt.hash(password, 10);
    const user = await User({
      fname: fname,
      lname: lname,
      email: email,
      password: hashpass,
    }).save();
    const nemail = { email: email };
    const expire = { expiresIn: "2h" };
    const token =  JWT.sign(nemail, secret, expire);
    if (user) {
      return res.status(200).send("User created successfully", token);
    }
  } catch (error) {
    if (error.errorResponse.code == 11000) {
      return res.status(500).send("User already exist");
    }
    return res.status(503).send(error);
  }
};

module.exports.UserData = async (req,res) => {
  try {
    const user = await User.find({email:req.email})
    if(user.length>0){
      return res.status(200).send(user)
    } 
  } catch(error) {
    return res.status(404).send("data not found")
  }
}
