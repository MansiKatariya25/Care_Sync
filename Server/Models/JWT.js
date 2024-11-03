const jwtverify = async (req,res,next)=>{
 
    try {
        const token = req.headers.authorization
        
     

    } catch(error) {
        return res.status(500).send("Something Went Wrong")
    }
}

module.exports = jwtverify