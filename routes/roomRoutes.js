const router = require('express').Router();

const controller = require('../controller/roomController')

router
       .get('/', controller.getRoomsType)
       .post('/', controller.createRoomType)
       .get('/:id',controller.getRoomType)
       .put('/:id', controller.editRoomType)
       .delete('/:id', controller.deleteRoomType)



module.exports = router;