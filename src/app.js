const express = require('express')
const path = require('path')

const pathToPublic = path.join(__dirname, "../public")
const port = process.env.PORT || 3000
const app = express()

app.use(express.static(pathToPublic))

app.listen(port, () => {
    console.log("server is up and running")
})

