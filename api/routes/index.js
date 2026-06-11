const bodyParser = require('body-parser')
const produto = require('./produtoRoute')
const user    = require('./userRoute')
const auth    = require('./authRoute')

module.exports = app => {
  app.use(
    produto,
    auth,
    user
  )
}