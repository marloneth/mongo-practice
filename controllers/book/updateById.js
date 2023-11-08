const Book = require('../../models/book').model

async function updateBookByIdController(req, res) {
  try {
    let isbnBook
    const { id } = req.params
    const { body } = req
    const options = { new: true }

    if (body.isbn) isbnBook = await Book.findOne({ isbn: body.isbn })

    if (isbnBook && isbnBook.id !== id) {
      throw new Error(`A book with the ISBN ${body.isbn} already exist`)
    }

    const result = await Book.findByIdAndUpdate(id, body, options)

    if (!result) throw new Error(`Book with id ${id} does not exist`)

    res.json({ book: result })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = updateBookByIdController
