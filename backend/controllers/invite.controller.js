const inviteService = require('../services/invite.service');

module.exports.getInvites = (req, res) => {
    inviteService.getInvites()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).json({ message: "Error occurred!", err });
        })
}

module.exports.createInvites = (req, res) => {
    inviteService.createInvites(req.body)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).json({ message: "Error occurred!", err });
        })
}

module.exports.deleteInvites = (req, res) => {
    inviteService.deleteInvites(req.body.id)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).json({ message: "Error occurred!", err });
        })
}