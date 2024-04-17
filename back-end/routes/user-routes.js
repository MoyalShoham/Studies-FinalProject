const express = require('express')
const router = express.Router();

const userController = require('../controllers/user-controller');

router.get('/', userController.getUsers);


// router.get('/', (req, res) => {
//     res.send('Hello World!');
// });

module.exports = router;
