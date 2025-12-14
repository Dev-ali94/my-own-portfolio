const express = require('express')
const messageRouter = require("../src/routes/message.routes")
const app = express()
app.use(express.json())

app.use("/api/message",messageRouter)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
module.exports = app