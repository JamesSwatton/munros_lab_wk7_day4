const PubSub = require('../helpers/pub_sub.js')

const MunrosView = function(container, munro) {
  this.munrosContainer = container
  this.munro = munro
}

MunrosView.prototype.render = function () {
const name = this.createMunroHeading()
// debugger
this.munrosContainer.appendChild(name)
const munrosList = this.createMunrosList()
this.munrosContainer.appendChild(munrosList)
  }

MunrosView.prototype.createMunroHeading = function () {
  const name = document.createElement('h2')
  name.textContent = this.munro.name
  return name
};

MunrosView.prototype.createMunrosList = function () {
  const munrosList = document.createElement('ul')
  this.populateList(munrosList)
  return munrosList
};

MunrosView.prototype.populateList = function (list) {

  const listItemHeight = document.createElement('li')
  listItemHeight.textContent = `Height: ${this.munro.height}`
  list.appendChild(listItemHeight)

  const listItemMeaning = document.createElement('li')
  listItemMeaning.textContent = `Meaning: ${this.munro.meaning}`
  list.appendChild(listItemMeaning)

};



module.exports = MunrosView
