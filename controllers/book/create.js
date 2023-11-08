const Book = require('../../models/book').model

async function createBookController(req, res) {
  const { body } = req
  try {
    const data = new Book(body)
    const isbnBook = await Book.findOne({ isbn: data.isbn })

    if (isbnBook) throw new Error('book already exists')

    const dataToSave = await data.save()
    res.status(200).json(dataToSave)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = createBookController
