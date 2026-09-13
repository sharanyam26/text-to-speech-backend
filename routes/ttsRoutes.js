const express = require("express")
const router = express.Router()
const { testEndpoint } = require("../controllers/ttsController")

router.get("/test", testEndpoint)

module.exports = router