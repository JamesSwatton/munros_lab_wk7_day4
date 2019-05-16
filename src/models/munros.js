const PubSub = require('../helpers/pub_sub.js')

const Munros = function(url) {
this.url = url
}

Munros.prototype.bindEvents = function() {
  PubSub.publish('Munros:all-mountains-ready', data)// data needs a name
};

module.exports = Munros
