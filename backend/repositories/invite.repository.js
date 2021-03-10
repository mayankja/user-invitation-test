const { Invited, User } = require("../models");

module.exports.getInvites = () =>
  new Promise(async (resolve, reject) => {
    try {
      let invites = await Invited.findAll({ include: User });
      resolve(invites);
    } catch (error) {
      reject(error);
    }
  });

module.exports.createInvites = (invite) =>
  new Promise(async (resolve, reject) => {
    try {
      invite = await Invited.create(invite);
      resolve(invite);
    } catch (error) {
      reject(error);
    }
  });

module.exports.deleteInvites = (inviteId) =>
  new Promise(async (resolve, reject) => {
    try {
      invite = await Invited.destroy({ where: { id: inviteId } });
      resolve(invite);
    } catch (error) {
      reject(error);
    }
  });
