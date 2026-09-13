const express = require("express")
const cors = require("cors")
const ttsRoutes = require("./routes/ttsRoutes")

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

app.use("/api", ttsRoutes)

app.get("/", (req, res) => {
  res.send("TTS Backend is running")
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})