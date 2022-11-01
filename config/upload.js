const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/images');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer ({
    storage: storage,
    fileFilter: function(req, file, callback) {
        if (
            file.mimetype === "image/png" ||
            file.mimetype === "image/jpg"
        ){
            callback(null, true);
        } else {
            console.log('only jpg & png file supported!');
            callback(null, false);
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
})

module.exports = upload;