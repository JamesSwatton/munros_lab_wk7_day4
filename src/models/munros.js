const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

const Munros = function(url) {
this.url = url
this.monros = []
}


Munros.prototype.getData = function() {
  const request = new RequestHelper(this.url)
  request.get()
  .then((data) => {
    this.monros = data
    PubSub.publish('Munros:all-mountains-ready', this.monros)
  })
};

module.exports = Munros
