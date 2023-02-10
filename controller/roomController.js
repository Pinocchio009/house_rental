const  {rooms} = require('../model/roomModel');
const {v4: uuid} = require('uuid');


//get all room type
exports.getRoomsType = async (req,res) => {
    try {
        const room = rooms;
        res.status(200).json({
            message: "All rooms",
            room: room

        });
    } catch (err) {
        res.status(500).json({message : err.message})
    }
}
//get single room type
exports.getRoomType = async (req, res) => {
    let id = req.params.id;
    try {
        const room = rooms.find((room) => room.id === id)
        res.status(200).json({
            message: "room found",
            room
        })
    } catch (err) {
        res.status(500).json({message : err.message})
    }
}
// create many room types
exports.createRoomType = async (req, res) => {
    try {
        const room = await req.body;
        room.id = uuid();
        rooms.push(room);

        res.status(201).json({
            message: "room created", 
            rooms,
        })
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}

//update or edt room type
exports.editRoomType = async (req, res) => {
    try {
        let id = req.params.id;
        const room = rooms.find((room)=> room.id === id)
        const newRoom = await req.body;
        res.status(200).json({
            message: "room updated",
            room
        })
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}

 //delete roomtype

 exports.deleteRoomType = async (req, res) => {
    try {
        let id = req.params.id;
        const room = rooms.find((room)=> room.id === id);
        rooms.splice(rooms.indexOf(room), 1)
        res.status(200).json({
            message: "room deleted",
            room
        })
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
 }
