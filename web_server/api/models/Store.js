/**
 * Store.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string',
      required: true
    },

    fullTitle: {
      type: 'string',
    },

    address: {
      type: 'string', 
      required:true
    },    

    phone: {
      type: 'string',
      required:true
    },

    city: {
      model: 'City',
      required: true
    },

    status: {
      model: 'Status',
      required: true
    },

    storeType: {
      model: 'StoreType',
      required: true
    },

    rating: {
      type:'number',
      required: true
    },

    timeOpen: {
      type:'string',
      required: true
    },

    timeClose: {
      type:'string',
      required: true
    },

    minPrice: {
      type:'number',
      required: true
    },

    maxPrice: {
      type:'number',
      required: true
    },

    timePrepare: {
      type:'string',
      required: true
    },

  },

};