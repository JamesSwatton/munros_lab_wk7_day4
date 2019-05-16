const PubSub = require('../helpers/pub_sub.js')

const MunrosView = function() {

}

MunrosView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:all-mountains-ready', (event)=>{
    console.log(event.detail)
  })
}

module.exports = MunrosView
