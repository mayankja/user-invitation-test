var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');
const inviteController = require('../controllers/invite.controller');

router.get('/user', userController.getUser);
router.post('/user', userController.createUser);

router.get('/invitation', inviteController.getInvites);
router.post('/invitation', inviteController.createInvites);
router.delete('/invitation', inviteController.deleteInvites);

module.exports = router;
