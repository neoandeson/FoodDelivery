/**
 * Product.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },

    price: {
      type: 'number',
      required: true
    },

    category: {
      model: 'Category',
      required: true
    },
    
    productType: {
      model: 'ProductType',
      required: true
    }
  },

};

