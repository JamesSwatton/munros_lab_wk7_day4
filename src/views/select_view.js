const PubSub = require('../helpers/pub_sub.js')

const SelectView = function (element) {
  this.element = element;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:all-mountains-ready', (event) => {
    const allMunros = event.detail;
    const filteredRegions = this.filterRegions(allMunros)
    this.populate(filteredRegions)
  })
};

SelectView.prototype.filterRegions = function (munros) {
  return regions = munros
    .map(munro => munro.region)
    .filter((region, index, regions) => regions.indexOf(region) === index);
};

SelectView.prototype.populate = function (regions) {
  regions.forEach((region, index) => {
    const regionOption = document.createElement('option');
    regionOption.textContent = region
    this.element.appendChild(regionOption)
  })
};

module.exports = SelectView;
