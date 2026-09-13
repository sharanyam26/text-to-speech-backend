function testEndpoint(req, res) {
  res.json({ message: "Hello from the backend!" })
}

module.exports = { testEndpoint }