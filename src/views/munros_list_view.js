const PubSub = require('../helpers/pub_sub.js')
const MunrosView = require('./munros_view.js')

const MunrosListView = function (container) {
  this.container = container
}

MunrosListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:all-mountains-ready', (event)=>{
    // console.log('Munros List View',event.detail)
    this.munros = event.detail
    this.render()
  })
};

MunrosListView.prototype.render = function () {
  this.munros.forEach((munro)=>{
    const munroView = new MunrosView(this.container, munro)
    munroView.render()
  })
};

module.exports = MunrosListView
