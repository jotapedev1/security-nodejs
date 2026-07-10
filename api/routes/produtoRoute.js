const { Router } = require('express')
const ProdutoController = require('../controllers/produtoController')
const authenticated = require('../middleware/authenticated')
const permission = require('../middleware/permission')

const router = Router()

router
  .post('/produto', authenticated, permission(['create-product']), ProdutoController.cadastrarProduto)
  .get('/produto', authenticated, permission(['list-products']), ProdutoController.buscarTodosProdutos)
  .get('/produto/id/:id', authenticated, permission(['list-products']), ProdutoController.buscarProdutoPorId)
  .put('/produto/id/:id', authenticated, permission(['edit-product']), ProdutoController.editarProduto)
  .delete('/produto/id/:id', authenticated, permission(['delete-product']), ProdutoController.deletarProdutoPorId)

module.exports = router