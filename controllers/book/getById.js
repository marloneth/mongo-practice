const Book = require('../../models/book').model

async function getBookByIdController(req, res) {
  try {
    const { id } = req.params
    const data = await Book.findById(id)

    if (!data) throw new Error(`Book with id ${id} does not exist`)

    res.json({ book: data })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = getBookByIdController
