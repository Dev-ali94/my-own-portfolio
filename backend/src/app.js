const express = require('express')
const messageRouter = require("../src/routes/message.routes")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({
  origin:process.env.FRONTEND_URL
}))

app.use("/api/message",messageRouter)
app.get('/', (req, res) => {
  res.send('Hello World!')
})


module.exports = app