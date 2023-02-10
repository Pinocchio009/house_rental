const express = require('express');

const {json} = require('express')
const room = require('./routes/roomRoutes')


const app = express();

app.use(json())

app.use('/room', room);



const PORT = process.env.PORT || 3200;

app.get('/', (req, res)=>{
    res.send('testing')
})

app.listen(PORT, () => console.log(`serving on port ${PORT}`))