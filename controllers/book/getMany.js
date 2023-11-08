const Book = require('../../models/book').model

async function getManyBooksController(req, res) {
  try {
    const data = await Book.find()
    res.json({ books: data })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = getManyBooksController
