const inviteRepository = require("../repositories/invite.repository");

module.exports.getInvites = () =>
  new Promise(async (resolve, reject) => {
    try {
      let invites = await inviteRepository.getInvites();
      resolve(invites);
    } catch (error) {
      reject(error);
    }
  });

module.exports.createInvites = (invite) =>
  new Promise(async (resolve, reject) => {
    try {
      invite = await inviteRepository.createInvites(invite);
      resolve(invite);
    } catch (error) {
      reject(error);
    }
  });

module.exports.deleteInvites = (inviteId) =>
  new Promise(async (resolve, reject) => {
    try {
      invite = await inviteRepository.deleteInvites(inviteId);
      resolve(invite);
    } catch (error) {
      reject(error);
    }
  });
