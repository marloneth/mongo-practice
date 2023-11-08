const express = require('express')
const createBookController = require('../controllers/book/create')
const getManyBooksController = require('../controllers/book/getMany')
const getBookByIdController = require('../controllers/book/getById')
const updateBookByIdController = require('../controllers/book/updateById')
const deleteBookByIdController = require('../controllers/book/deleteById')

const bookRouter = express.Router()

bookRouter.post('/', createBookController)

bookRouter.get('/', getManyBooksController)

bookRouter.get('/:id', getBookByIdController)

bookRouter.patch('/:id', updateBookByIdController)

bookRouter.delete('/:id', deleteBookByIdController)

module.exports = bookRouter
