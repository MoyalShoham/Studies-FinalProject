const express = require('express');
const router = express.Router();

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage});

const userController = require('../controllers/user-controller');

router.get('/', userController.getUsers);

router.post('/api/upload', upload.single('file'), userController.uploadFile);
// router.get('/', (req, res) => {
//     res.send('Hello World!');
// });

module.exports = router;
