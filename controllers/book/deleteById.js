const Book = require('../../models/book').model

async function deleteBookByIdController(req, res) {
  try {
    const { id } = req.params
    const deletedBook = await Book.findByIdAndDelete(id)

    if (!deletedBook) throw new Error(`Book with id ${id} does not exist`)

    res.json({ message: `Book with id ${id} has been deleted.` })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = deleteBookByIdController
