const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"));

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
  })

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html');
  })

  app.get('/image', (req, res) => {
    res.sendFile(__dirname + '/views/image.html');
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})