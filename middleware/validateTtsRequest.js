const SUPPORTED_LANGUAGES = ["en-US", "en-GB", "hi-IN", "gu-IN", "mr-IN", "es-ES", "fr-FR", "de-DE"]
const MAX_TEXT_LENGTH = 5000

function validateTtsRequest(req, res, next) {
  const { text, language, voice } = req.body

  if (!text || text.trim() === "") {
    return res.status(400).json({
      success: false,
      error: "Text cannot be empty."
    })
  }

  if (text.length > MAX_TEXT_LENGTH) {
    return res.status(400).json({
      success: false,
      error: `Text exceeds maximum allowed length of ${MAX_TEXT_LENGTH} characters.`
    })
  }

  if (!language) {
    return res.status(400).json({
      success: false,
      error: "Language is required."
    })
  }

  if (!SUPPORTED_LANGUAGES.includes(language)) {
    return res.status(400).json({
      success: false,
      error: `Language '${language}' is not supported.`
    })
  }

  if (!voice || voice.trim() === "") {
    return res.status(400).json({
      success: false,
      error: "Voice is required."
    })
  }

  next()
}

module.exports = validateTtsRequest