const express = require("express")
const router = express.Router()
const { testEndpoint, generateSpeech } = require("../controllers/ttsController")
const validateTtsRequest = require("../middleware/validateTtsRequest")

router.get("/test", testEndpoint)
router.post("/tts", validateTtsRequest, generateSpeech)

module.exports = router