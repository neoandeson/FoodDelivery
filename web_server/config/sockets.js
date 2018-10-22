/**
 * WebSocket Server Settings
 * (sails.config.sockets)
 *
 * Use the settings below to configure realtime functionality in your app.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For all available options, see:
 * https://sailsjs.com/config/sockets
 */

module.exports.sockets = {

  // transports: [ 'websocket' ],

  // beforeConnect: function(handshake, proceed) {
  //
  //   // `true` allows the socket to connect.
  //   // (`false` would reject the connection)
  //   return proceed(undefined, true);
  //
  // },

  // afterDisconnect: function(session, socket, done) {
  //
  //   // By default: do nothing.
  //   // (but always trigger the callback)
  //   return done();
  //
  // },

  // grant3rdPartyCookie: true,

  onlyAllowOrigins: ['http://localhost:1337']

};
