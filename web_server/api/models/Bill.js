/**
 * Bill.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    user: {
      model: 'User',
      required: true
    },
    store: {
      model: 'Store',
      required: true
    },
    purchase: {
      model: 'PurchaseType',
      required: true
    },
    totalPrice: {
      type: 'number',
      required: true
    },
    placePickupLatitude: {
      type: 'number',
      required: true
    },
    placePickupLongitude: {
      type: 'number',
      required: true
    },
    distance: {
      type: 'double',
      required: true
    }
  },

};

