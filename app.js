const express = require('express')
const app = express()
const https = require('https')
const request = require('request')
const port = process.env.PORT || 3001

app.get('/*', (req, res) => {
  console.log(req.params[0])
  https.get(`https://www.jotform.com/${req.params[0]}`, (resp) => {
    if (resp.statusCode === 302 && resp.headers.location) {
      request.get(resp.headers.location).pipe(res)
    }
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`))
