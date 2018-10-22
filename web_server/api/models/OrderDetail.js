/**
 * OrderDetail.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    product: {
      model: 'Product',
      required: true
    },
    order: {
      model: 'Order',
      required: true
    },
    price: {
      type: 'number',
      required: true
    },
    discount: {
      model: 'Discount'
    },
    quantity: {
      type: 'number',
      required: true
    }
  },

};

