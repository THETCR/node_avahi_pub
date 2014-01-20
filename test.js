var avahi = require('./index');

console.log('supported: ' + avahi.isSupported());

var httpA = avahi.publish({ name: 'steward', type: '_http._tcp', port: 80 });
