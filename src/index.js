const express = require('express')
const cors = require('cors')
const server = express()
server.use(cors())
server.use(express.json())

const InadimplentesRoutes = require( './routes/InadimplentesRoutes')
server.use("/inadimplentes", InadimplentesRoutes);

server.listen(5000, () => {
    console.log('API iniciada na porta 5000')
})