const jwt = require('jsonwebtoken')
const User = require('./User')

const jwtverify = async (req,res,next)=>{
 
    try {
        const token = req.headers.authorization
       const email = jwt.verify(token,process.env.SECRET_KEY)
       const user = User.find({email:email.email})
       if(user){
        req.email = email.email
        next()
       }
      
    } catch(error) {
        console.log(error)
        return res.status(500).send("Something Went Wrong")
    }
}

module.exports = jwtverify