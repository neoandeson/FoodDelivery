/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  //views
  'get /': {
    view: 'pages/homepage'
  },

  'get /city': 'CityController.list',
  'get /city/create': {
    view: 'pages/models/city/create'
  },

  'get /category': 'CategoryController.list',
  'get /category/create': {
    view: 'pages/models/category/create'
  },
  
  'get /productType': 'ProductTypeController.list',
  'get /productType/create': {
    view: 'pages/models/productType/create'
  },

  'get /purchaseType': 'PurchaseTypeController.list',
  'get /purchaseType/create': {
    view: 'pages/models/purchaseType/create'
  },
  
  'get /status': 'StatusController.list',
  'get /status/create': {
    view: 'pages/models/status/create'
  },
  
  'get /store': 'StoreController.list',
  'get /store/create': 'StoreController.add',
  
  'get /storeType': 'StoreTypeController.list',
  'get /storeType/create': {
    view: 'pages/models/storeType/create'
  },
  
  'get /userRole': 'UserRoleController.list',
  'get /userRole/create': {
    view: 'pages/models/userRole/create'
  },
  
  'get /user': 'UserController.list',
  'get /user/create': 'UserController.add',
  //end views

  //
  'post /city/create': 'CityController.add',
  'post /city/update': 'CityController.update',

  'post /category/create': 'CategoryController.add',
  'post /category/update': 'CategoryController.update',
  
  'post /purchaseType/create': 'PurchaseTypeController.add',
  'post /purchaseType/update': 'PurchaseTypeController.update',

  'post /productType/create': 'ProductTypeController.add',
  'post /productType/update': 'ProductTypeController.update',

  'post /status/create': 'StatusController.add',
  'post /status/update': 'StatusController.update',

  'post /store/create': 'StoreController.add',
  'post /store/update': 'StoreController.update',
  'get /store/search': 'StoreController.search',

  'post /storeType/create': 'StoreTypeController.add',
  'post /storeType/update': 'StoreTypeController.update',

  'post /userRole/create': 'UserRoleController.add',
  'post /userRole/update': 'UserRoleController.update',

  'post /user/create': 'UserController.add',
  'post /user/update': 'UserController.update',
  'post /user/signup': 'UserController.add',
  'post /user/login': 'UserController.login',

  'get /search': 'StoreController.search',
  'post /createOrder': 'OrderController.add',
  'post /updateOrderStatus': 'OrderController.update  ',

};
