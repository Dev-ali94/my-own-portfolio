const app = require("./src/app")
const dotenv = require("dotenv")
const connectDB = require("./src/config/db")
dotenv.config()
connectDB()

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`This app is runing on port ${port}`)
})