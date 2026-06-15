const express = require('express')
const messageRouter = require("../src/routes/message.routes")
const cors = require("cors")

const app = express()

app.use(express.json())

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true)

    // allow only HTTPS origins
    if (origin.startsWith("https://")) {
      return callback(null, true)
    }

    // block everything else (like http)
    return callback(new Error("Not allowed by CORS"))
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}))

// handle preflight requests
app.options("*", cors())

app.use("/api/message", messageRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = app