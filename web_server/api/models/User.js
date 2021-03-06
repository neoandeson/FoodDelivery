/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    
    username: {
      type: 'string', 
      required: true,
      unique: true
    },

    password: {
      type: 'string', 
      required: true
    },    

    email: {
      type: 'string', 
      required: true, 
      unique: true
    },

    sex: {
      type: 'string', 
      required: true
    },   

    address: {
      type: 'string', 
      required: true
    },    

    phone: {
      type: 'string',
      required: true
    },

    age: {
      type: 'number', 
      required: true
    },    

    city: {
      model: 'City',
      required: true
    },    

    role: {
      model: 'UserRole',
      required: true
    },
  },

};

