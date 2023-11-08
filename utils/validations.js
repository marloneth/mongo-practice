const validators = {
  string: {
    fixedLength: (length) => (value) =>
      typeof value === 'string' && value.length === length,
  },
  array: {
    notEmpty: (value) => Array.isArray(value) && value.length > 0,
    noDuplicate: (value) => [...new Set(value)].length === value.length,
    string: {
      notEmpty: (value) => !value.some((item) => !item.length),
    },
  },
}

module.exports = validators
