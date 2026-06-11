const express = require('express')
const routes = require('./routes')

const app = express()
const port = 3000

app.use(express.json()); // <-- adicione isto

routes(app)

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app