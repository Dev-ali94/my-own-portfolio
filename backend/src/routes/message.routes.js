const express =  require("express")
const {createMessageAndSend}  = require("../controller/message.controller")
const router = express.Router()

router.post("/create-and-send", createMessageAndSend)

module.exports = router