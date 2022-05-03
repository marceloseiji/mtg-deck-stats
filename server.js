const path = require('path')
const express = require('express')

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.set('port', process.env.PORT || 3000)

const server = app.listen(app.get('port'), function () {
  console.log('listening on port ', server.address().port)
})

const path = require('path')
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})
