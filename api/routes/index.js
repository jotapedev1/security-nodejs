const bodyParser = require('body-parser')
const produto = require('./produtoRoute')
const user    = require('./userRoute')
const auth    = require('./authRoute')
const role    = require('./roleRoute')
const permission = require('./permissionRoute')

module.exports = app => {
  app.use(
    auth,
    user,
    produto,
    role,
    permission
  )
}