const userRepository = require('../repositories/user.repository');

module.exports.getUser = () => new Promise(async (resolve, reject) => {
    try {
        user = await userRepository.getUser();
        resolve(user);
    } catch (error) {
        reject(error);
    }
});

module.exports.createUser = (user) => new Promise(async (resolve, reject) => {
    try {
        user = await userRepository.createUser(user);
        resolve(user);
    } catch (error) {
        reject(error);
    }
});
