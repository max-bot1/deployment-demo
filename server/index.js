const express = require('express')
const path = require('path')

const app = express()

app.get('/', function (req, res) {
    res.sendFile(path.join(_dirname, "../index.html"))
})

const port = process.env.PORT || 4567

app.listen(4567, => console.log(`Server is running on ${port}`))