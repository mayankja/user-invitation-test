const userService = require('../services/user.service');

module.exports.getUser = (req, res) => {
    userService.getUser()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            console.log("🚀 ~ file: user.controller.js ~ line 9 ~ err", err)
            res.status(400).json({ message: "Error occurred!", err });
        })
}

module.exports.createUser = (req, res) => {
    userService.createUser(req.body)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).json({ message: "Error occurred!", err });
        })
}