const router = require('express').Router();

const {User} = require("../database");
const {usersController} = require("../controllers");

router.get('/', usersController.getUser);

router.post('/', usersController.createUser);

router.get('/by_param', usersController.getUserByParam)

module.exports = router;
