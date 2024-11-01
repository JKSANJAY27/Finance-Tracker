const express = require('express')
const cors = require('cors');
const { db } = require('./backend/db/db');
const {readdirSync} = require('fs')
const app = express()

require('dotenv').config()

//middlewares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./backend/routes').map((route) => app.use('/api/v1', require('./backend/routes/' + route)))

const PORT = process.env.PORT

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()
