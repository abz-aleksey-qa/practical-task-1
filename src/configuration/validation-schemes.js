const jsonSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      position: {
        type: 'string',
      },
      age: {
        type: 'number',
      },
      phone: {
        type: 'string',
      },
    },
    required: [
      'name',
      'age',
      'phone',
      'position',
    ],
  },
};

const csvConfiguration = {
  headers: [
    {
      name: 'name',
      inputName: 'name',
      required: false,
    },
    {
      name: 'position',
      inputName: 'position',
      required: false,
    },
    {
      name: 'age',
      inputName: 'age',
      required: false,
    },
    {
      name: 'phone',
      inputName: 'phone',
      required: false,
    },
  ],
};

module.exports = { jsonSchema, csvConfiguration };
