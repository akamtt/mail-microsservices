const User = require("../model/UserModel");


const findUserById = async (id) => {
  try {
    const returnedUser = await User.findOne({ where: { id } })
    return returnedUser.dataValues;
  } catch (err) {
    console.log(err)
  }
}

const findUserByEmail = async (email) => {
  try {
    const returnUser = await User.findOne({ where: { email } })
    return returnUser.dataValues;
  } catch (err) {
    console.log(err);
  }
}

const createUser = async (body) => {
  const userToPersist = {
    "name": body.name,
    "email": body.email,
    "phone": body.phone,
    "createdAt": Date.now(),
    "updatedAt": Date.now()
  };
  return User.create(userToPersist);
}



module.exports = {
  findUserById,
  createUser,
  findUserByEmail

}