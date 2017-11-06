var express = require('express');
var router = express.Router();
var controller = require('../controller/controller');


router.route('/v1/getUser/:email')
    .get(controller.getUser); 
router.route('/v1/newUser')
    .post(controller.newUser);

router.route('/v1/setattendance')
     .post(controller.setAttendance);

router.route('/v1/getattendance/:email')
    .get(controller.getAttendance);


module.exports = router;