const Family = require("../Models/Family")


module.exports.Add = async(req,res)=>{
    try {
        const {name,relation,age,gender,height,weight,bmi,email} = req.body
        if(!name || !relation || !age || !gender || !height || !weight || !bmi|| !email){
            return res.status(404).send("Data not found")
        }
        const family = await Family({name:name,relation:relation,age:age,height:height,weight:weight,bmi:bmi,email:email}).save()
        if(family){
            return res.status(200).send("Data Added succesfully")
        }
        
    } catch (error) {
        return res.status(503).send(error)
    }
}
