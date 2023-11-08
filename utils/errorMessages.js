const errorMessages = {
  entityProps: {
    general: {
      required: (entity, prop) => `${entity} ${prop} is required`,
    },
    string: {
      notEmpty: (entity, prop) => `${entity} ${prop} should not be empty`,
      fixedLength: (entity, prop, length) =>
        `${entity} ${prop} should be ${length} chars length`,
    },
    array: {
      notEmpty: (entity, prop) => `${entity} should have at least 1 ${prop}`,
      noDuplicate: (entity, prop) =>
        `${entity} should not have duplicated ${prop}`,
      string: {
        notEmpty: (entity, prop) => `${entity} should not have empty ${prop}`,
      },
    },
    number: {
      min: (entity, prop, min) =>
        `${entity} ${prop} should be greater than or equal ${min}`,
    },
  },
}

module.exports = errorMessages
