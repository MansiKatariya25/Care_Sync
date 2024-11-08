const Family = require("../Models/Family");

module.exports.Add = async (req, res) => {
  try {
    const { name, relation, age, gender, height, weight, bmi } = req.body;
    const email = req.email;
    if (
      !name ||
      !relation ||
      !age ||
      !gender ||
      !height ||
      !weight ||
      !bmi ||
      !email
    ) {
      return res.status(404).send("Data not found");
    }
    const family = await Family({
      name: name,
      relation: relation,
      age: age,
      height: height,
      weight: weight,
      bmi: bmi,
      email: email,
      gender:gender
    }).save();
    if (family) {
      return res.status(200).send("Data Added succesfully");
    }
  } catch (error) {
    return res.status(503).send(error);
  }
};

module.exports.handleFamily = async (req, res) => {
  try {
    const email = req.email
    const familydata = await Family.find({ email: email });
    console.log(familydata);

    if (familydata.length > 0) {
      res.status(200).send(familydata);
    }
  } catch (error) {
    res.status(404).send("Not found");
  }
};
