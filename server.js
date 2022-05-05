const path = require('path')
const express = require('express')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.set('port', process.env.PORT || 3000)

const server = app.listen(app.get('port'), function () {
  console.log(
    ':::THIS IS USED ONLY BY HEROKU DEPLOYMENT::: \nIF YOU WANT TO START OUT THE PROJECT, INSTEAD USE "yarn dev" ON COMMAND CONSOLE'
  )
  console.log('heroku is listening on port: ', server.address().port)
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
