const { User } = require("../models");

module.exports.getUser = () =>
  new Promise(async (resolve, reject) => {
    try {
      let user = await User.findAll();
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });

module.exports.getUserById = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      let user = await User.findOne({ where: { id } });
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });

module.exports.createUser = (user) =>
  new Promise(async (resolve, reject) => {
    try {
      user = await User.create(user);
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
