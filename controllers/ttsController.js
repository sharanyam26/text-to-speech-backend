function testEndpoint(req, res) {
  res.json({ message: "Hello from the backend!" })
}

function generateSpeech(req, res) {
  const { text, language, voice } = req.body

  // No real audio file is generated here — actual speech synthesis
  // happens in the browser via the Web Speech API (Level 1 spec approach).
  // This endpoint demonstrates request handling, validation, and response shape.
  console.log(`TTS request received: language=${language}, voice=${voice}, length=${text.length}`)

  res.status(200).json({
    success: true,
    message: "Request validated successfully.",
    receivedText: text,
    language,
    voice
  })
}

module.exports = { testEndpoint, generateSpeech }