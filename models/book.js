const mongoose = require('mongoose')
const error = require('./../utils/errorMessages').entityProps
const validator = require('../utils/validations')

const entity = 'book'
const bookDataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, error.general.required(entity, 'title')],
    minLength: [1, error.string.notEmpty(entity, 'title')],
  },
  authors: {
    type: [String],
    required: [true, error.general.required(entity, 'authors')],
    validate: [
      {
        validator: validator.array.notEmpty,
        message: () => error.array.notEmpty(entity, 'authors'),
      },
      {
        validator: validator.array.noDuplicate,
        message: () => error.array.noDuplicate(entity, 'authors'),
      },
      {
        validator: validator.array.string.notEmpty,
        message: () => error.array.notEmpty(entity, 'authors'),
      },
    ],
  },
  publisher: {
    type: String,
    required: [true, error.general.required(entity, 'publisher')],
  },
  publishedDate: {
    type: Date,
    required: [true, error.general.required(entity, 'published date')],
  },
  description: {
    type: String,
    required: [true, error.general.required(entity, 'description')],
    minLength: [1, error.string.notEmpty(entity, 'description')],
  },
  isbn: {
    type: String,
    required: [true, error.general.required(entity, 'isbn')],
    validate: {
      validator: validator.string.fixedLength(13),
      message: error.string.fixedLength(entity, 'isbn', 13),
    },
  },
  pageCount: {
    type: Number,
    required: [true, error.general.required(entity, 'page count')],
    min: [1, error.number.min(entity, 'page count', 1)],
  },
  categories: {
    type: [String],
    required: [true, error.general.required(entity, 'categories')],
    validate: [
      {
        validator: validator.array.notEmpty,
        message: () => error.array.notEmpty(entity, 'categories'),
      },
      {
        validator: validator.array.noDuplicate,
        message: () => error.array.noDuplicate(entity, 'categories'),
      },
      {
        validator: validator.array.string.notEmpty,
        message: () => error.array.notEmpty(entity, 'categories'),
      },
    ],
  },
  language: {
    type: String,
    required: [true, error.general.required(entity, 'language')],
    minLength: [1, error.string.notEmpty(entity, 'language')],
  },
})

module.exports = {
  model: mongoose.model('Book', bookDataSchema),
  schema: bookDataSchema,
}
